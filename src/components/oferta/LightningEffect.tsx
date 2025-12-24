import { useEffect, useState } from 'react';

const LightningEffect = () => {
  const [flashes, setFlashes] = useState<{ id: number; left: number; top: number; scale: number }[]>([]);

  useEffect(() => {
    const createFlash = () => {
      const id = Date.now();
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const scale = 0.5 + Math.random();

      setFlashes(prev => [...prev, { id, left, top, scale }]);

      setTimeout(() => {
        setFlashes(prev => prev.filter(f => f.id !== id));
      }, 200);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chane to flash
        createFlash();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flashes.map(flash => (
        <div
          key={flash.id}
          className="absolute w-[2px] h-[100px] bg-yellow-300 shadow-[0_0_15px_rgba(255,255,0,0.8)] animate-pulse"
          style={{
            left: `${flash.left}%`,
            top: `${flash.top}%`,
            transform: `scale(${flash.scale}) rotate(${Math.random() * 45 - 22.5}deg)`,
            opacity: 0.3
          }}
        />
      ))}
    </div>
  );
};

export default LightningEffect;
