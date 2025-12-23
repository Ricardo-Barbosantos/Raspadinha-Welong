export const MarqueeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-2 overflow-hidden w-full relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content {
          animation: marquee 60s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
      <div className="marquee-content">
        <div className="flex whitespace-nowrap shrink-0">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="inline-block text-black font-bold text-base px-8 uppercase">
              🎰 Raspe e ganhe cupom de desconto exclusivo! 
            </span>
          ))}
        </div>
        <div className="flex whitespace-nowrap shrink-0">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="inline-block text-black font-bold text-base px-8 uppercase">
              🎰 Raspe e ganhe cupom de desconto exclusivo! 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
