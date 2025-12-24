import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Countdown = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 5,
    seconds: 0
  });

  const today = format(new Date(), "dd/MM/yyyy", { locale: ptBR });

  useEffect(() => {
    const calculateTimeLeft = () => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        // Decrementa um segundo
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else {
          // Timer chegou a 00:00:00
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours, minutes, seconds };
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border shadow-card max-w-2xl mx-auto ${className || 'bg-card'}`} style={style}>


      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-center mb-1 sm:mb-6">


        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            MINUTOS
          </div>
        </div>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground -mt-4 sm:mt-0">:</div>

        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            SEGUNDOS
          </div>
        </div>
      </div>

      <p className="text-center text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 leading-relaxed font-poppins font-bold">
        Aproveite esta oferta limitada - Válida somente por hoje ({today})
      </p>
    </div>
  );
};

export default Countdown;
