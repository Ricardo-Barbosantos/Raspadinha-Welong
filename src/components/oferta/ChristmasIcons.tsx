import { Snowflake, Gift, Star } from 'lucide-react';

const ChristmasIcons = () => {
  const icons = [
    // Ícones visíveis em todas as telas
    { icon: <Snowflake className="text-white/60" />, size: 'w-6 h-6', top: '50px', left: '15%', showMobile: true },
    { icon: <span className="opacity-70">🎄</span>, size: 'text-2xl', top: '100px', left: '85%', showMobile: true },
    { icon: <Star className="text-christmas-gold/60" fill="currentColor" />, size: 'w-5 h-5', top: '30px', left: '75%', showMobile: true },
    { icon: <Snowflake className="text-white/50" />, size: 'w-4 h-4', top: '70px', left: '10%', showMobile: true },
    { icon: <span className="opacity-65">🎅</span>, size: 'text-xl', top: '40px', left: '88%', showMobile: false },
    { icon: <Snowflake className="text-white/55" />, size: 'w-5 h-5', top: '20px', left: '22%', showMobile: false },
    { icon: <span className="opacity-60">🎄</span>, size: 'text-lg', top: '55px', left: '92%', showMobile: false },
    
    // Área do logo
    { icon: <Gift className="text-white/55" />, size: 'w-5 h-5', top: '130px', left: '20%', showMobile: false },
    { icon: <span className="opacity-60">🦌</span>, size: 'text-lg', top: '150px', left: '80%', showMobile: true },
    { icon: <Snowflake className="text-white/55" />, size: 'w-5 h-5', top: '170px', left: '12%', showMobile: false },
    { icon: <Star className="text-christmas-gold/55" fill="currentColor" />, size: 'w-4 h-4', top: '120px', left: '85%', showMobile: false },
    { icon: <span className="opacity-65">🛷</span>, size: 'text-lg', top: '145px', left: '15%', showMobile: false },
    
    // Área entre logo e título
    { icon: <Star className="text-christmas-gold/55" fill="currentColor" />, size: 'w-4 h-4', top: '210px', left: '18%', showMobile: false },
    { icon: <span className="opacity-70">🛷</span>, size: 'text-xl', top: '200px', left: '82%', showMobile: false },
    { icon: <span className="opacity-65">🎅🏻</span>, size: 'text-xl', top: '230px', left: '8%', showMobile: true },
    { icon: <Snowflake className="text-white/60" />, size: 'w-6 h-6', top: '240px', left: '90%', showMobile: true },
    { icon: <Gift className="text-white/50" />, size: 'w-5 h-5', top: '220px', left: '25%', showMobile: false },
    { icon: <span className="opacity-60">🎄</span>, size: 'text-lg', top: '250px', left: '78%', showMobile: false },
    
    // Ao redor dos títulos (laterais)
    { icon: <Gift className="text-white/60" />, size: 'w-6 h-6', top: '280px', left: '15%', showMobile: false },
    { icon: <span className="opacity-70">🎄</span>, size: 'text-2xl', top: '300px', left: '88%', showMobile: false },
    { icon: <Snowflake className="text-white/50" />, size: 'w-4 h-4', top: '340px', left: '10%', showMobile: false },
    { icon: <Star className="text-christmas-gold/60" fill="currentColor" />, size: 'w-5 h-5', top: '360px', left: '85%', showMobile: false },
    { icon: <span className="opacity-65">🎅</span>, size: 'text-xl', top: '320px', left: '12%', showMobile: false },
    { icon: <Snowflake className="text-white/55" />, size: 'w-5 h-5', top: '310px', left: '82%', showMobile: false },
    
    // Área acima do countdown
    { icon: <span className="opacity-65">🦌</span>, size: 'text-lg', top: '400px', left: '12%', showMobile: false },
    { icon: <Snowflake className="text-white/55" />, size: 'w-5 h-5', top: '420px', left: '82%', showMobile: false },
    { icon: <span className="opacity-60">🎅</span>, size: 'text-lg', top: '380px', left: '20%', showMobile: false },
    { icon: <Star className="text-christmas-gold/60" fill="currentColor" />, size: 'w-5 h-5', top: '410px', left: '88%', showMobile: false },
    { icon: <Gift className="text-white/55" />, size: 'w-5 h-5', top: '440px', left: '15%', showMobile: false },
    { icon: <span className="opacity-70">🎄</span>, size: 'text-xl', top: '460px', left: '85%', showMobile: false },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none z-[5] overflow-hidden" style={{ height: '600px' }}>
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.size} ${!item.showMobile ? 'hidden sm:block' : ''}`}
          style={{
            top: item.top,
            left: item.left,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default ChristmasIcons;
