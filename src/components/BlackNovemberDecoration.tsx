import { Zap, Flame, Sparkles } from 'lucide-react';

interface BlackNovemberDecorationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BlackNovemberDecoration = ({ size = 'md', className = '' }: BlackNovemberDecorationProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <Zap className="absolute top-0 left-0 w-full h-full text-black-november-gold animate-pulse" />
      <Flame className="absolute top-1 left-1 w-3/4 h-3/4 text-black-november-orange animate-pulse delay-75" />
      <Sparkles className="absolute top-2 left-2 w-1/2 h-1/2 text-black-november-gold animate-pulse delay-150" />
    </div>
  );
};

export default BlackNovemberDecoration;
