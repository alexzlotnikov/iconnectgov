import React, { useEffect, useRef } from 'react';

interface ParticleNetworkProps {
  className?: string;
  lineColor?: string;
  dotColor?: string;
  opacity?: number;
}

const ParticleNetwork: React.FC<ParticleNetworkProps> = ({ 
  className = "",
  lineColor = "148, 163, 184", // slate-400 rgb
  dotColor = "59, 130, 246", // blue-500 rgb
  opacity = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = container.offsetWidth);
    let h = (canvas.height = container.offsetHeight);
    let animationFrameId: number;

    const particles: Particle[] = [];
    const properties = {
      particleCount: Math.min(Math.floor((w * h) / 10000), 100), // Density
      lineLength: 120, // Connection distance
      particleSpeed: 0.4,
    };

    const handleResize = () => {
      w = canvas.width = container.offsetWidth;
      h = canvas.height = container.offsetHeight;
      // Re-init particles on resize to prevent clustering
      particles.length = 0;
      const count = Math.min(Math.floor((w * h) / 10000), 100);
      for(let i = 0; i < count; i++){
          particles.push(new Particle());
      }
    };

    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      velocityX: number;
      velocityY: number;
      
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.velocityX = (Math.random() - 0.5) * properties.particleSpeed;
        this.velocityY = (Math.random() - 0.5) * properties.particleSpeed;
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Bounce off edges
        if (this.x < 0 || this.x > w) this.velocityX *= -1;
        if (this.y < 0 || this.y > h) this.velocityY *= -1;
      }

      draw() {
        if(!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${opacity})`;
        ctx.fill();
      }
    }

    function drawLines() {
        if(!ctx) return;
        for(let i = 0; i < particles.length; i++) {
            for(let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx*dx + dy*dy);

                if(distance < properties.lineLength) {
                    const lineOpacity = (1 - distance / properties.lineLength) * opacity * 0.4;
                    ctx.lineWidth = 0.5;
                    ctx.strokeStyle = `rgba(${lineColor}, ${lineOpacity})`;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        if(!ctx) return;
        ctx.clearRect(0, 0, w, h);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        drawLines();
        animationFrameId = requestAnimationFrame(animate);
    }

    // Init
    for(let i = 0; i < properties.particleCount; i++){
        particles.push(new Particle());
    }
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, [lineColor, dotColor, opacity]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
        <canvas ref={canvasRef} />
    </div>
  );
};

export default ParticleNetwork;