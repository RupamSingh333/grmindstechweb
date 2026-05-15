import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Create particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 8), 120);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.7) * 0.4, // Upward drift
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: i % 2 === 0 ? '6, 182, 212' : '99, 102, 241', // Cyan or Indigo
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const currentIsDark = document.documentElement.classList.contains('dark');

      particles.forEach((particle, i) => {
        // Drift
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse Repulsion
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          particle.x += (dx / dist) * force * 3;
          particle.y += (dy / dist) * force * 3;
        }

        // Wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Dynamic opacity based on theme
        const themeOpacity = currentIsDark ? particle.opacity * 0.5 : particle.opacity;
        ctx.fillStyle = `rgba(${particle.color}, ${themeOpacity})`;
        ctx.fill();

        // Connect nearby particles
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx2 = particle.x - otherParticle.x;
          const dy2 = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            const lineOpacity = currentIsDark ? 0.05 : 0.15;
            ctx.strokeStyle = `rgba(${particle.color}, ${lineOpacity * (1 - distance / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      updateSize();
    };

    const handleScroll = () => {
      if (canvas) {
        canvas.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-transform duration-200 ease-out"
    />
  );
};

export default ParticleBackground;
