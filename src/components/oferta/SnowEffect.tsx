const SnowEffect = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Flocos de neve animados */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-christmas-white/60 rounded-full animate-snowfall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 10}vh`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
      
      {/* Estrelas natalinas piscando */}
      <div className="absolute top-[5%] left-[10%] w-3 h-3 bg-christmas-gold/40 rounded-full animate-twinkle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[15%] right-[15%] w-2 h-2 bg-christmas-gold/50 rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[25%] left-[80%] w-4 h-4 bg-christmas-gold/30 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[35%] left-[8%] w-3 h-3 bg-christmas-gold/45 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[45%] right-[85%] w-2 h-2 bg-christmas-gold/55 rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[55%] left-[70%] w-3 h-3 bg-christmas-gold/35 rounded-full animate-twinkle" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-[65%] left-[20%] w-4 h-4 bg-christmas-gold/50 rounded-full animate-twinkle" style={{ animationDelay: '0.8s' }} />
      <div className="absolute top-[75%] right-[25%] w-2 h-2 bg-christmas-gold/40 rounded-full animate-twinkle" style={{ animationDelay: '1.8s' }} />
      <div className="absolute top-[85%] left-[45%] w-3 h-3 bg-christmas-gold/60 rounded-full animate-twinkle" style={{ animationDelay: '2.2s' }} />
      <div className="absolute top-[12%] left-[35%] w-2 h-2 bg-christmas-gold/45 rounded-full animate-twinkle" style={{ animationDelay: '0.3s' }} />
      <div className="absolute top-[32%] right-[40%] w-4 h-4 bg-christmas-gold/35 rounded-full animate-twinkle" style={{ animationDelay: '1.3s' }} />
      <div className="absolute top-[52%] left-[28%] w-3 h-3 bg-christmas-gold/50 rounded-full animate-twinkle" style={{ animationDelay: '2.8s' }} />
      <div className="absolute top-[72%] right-[55%] w-2 h-2 bg-christmas-gold/40 rounded-full animate-twinkle" style={{ animationDelay: '0.6s' }} />
      <div className="absolute top-[92%] left-[65%] w-3 h-3 bg-christmas-gold/55 rounded-full animate-twinkle" style={{ animationDelay: '1.6s' }} />
    </div>
  );
};

export default SnowEffect;
