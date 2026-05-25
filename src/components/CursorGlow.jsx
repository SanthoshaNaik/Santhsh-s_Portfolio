import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect touch device
    const touchCheck = window.matchMedia('(pointer: coarse)').matches;
    setIsMobile(touchCheck);

    if (touchCheck) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-5 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--glow-color), transparent 80%)`,
      }}
    />
  );
}
