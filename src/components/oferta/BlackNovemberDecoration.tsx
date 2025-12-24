import { Sparkles, Star, Zap } from 'lucide-react';
import { cn } from "@/lib/utils";

interface BlackNovemberDecorationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const BlackNovemberDecoration = ({ className, size = 'md' }: BlackNovemberDecorationProps) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-96 h-96'
  };

  const iconSizes = {
    sm: { main: 24, sec: 16 },
    md: { main: 48, sec: 32 },
    lg: { main: 96, sec: 64 }
  };

  return (
    <div className={cn("relative pointer-events-none select-none", sizeClasses[size], className)}>
      <div className="absolute inset-0 flex items-center justify-center animate-pulse opacity-20">
        <Zap className={cn("text-black-november-gold rotate-12", `w-${iconSizes[size].main} h-${iconSizes[size].main}`)} />
      </div>
      <div className="absolute top-0 right-0 animate-bounce delay-75 duration-1000">
        <Star className={cn("text-black-november-orange fill-current opacity-40", `w-${iconSizes[size].sec} h-${iconSizes[size].sec}`)} />
      </div>
      <div className="absolute bottom-0 left-0 animate-bounce delay-150 duration-1000">
        <Sparkles className={cn("text-black-november-gold opacity-30", `w-${iconSizes[size].sec} h-${iconSizes[size].sec}`)} />
      </div>
    </div>
  );
};

export default BlackNovemberDecoration;
