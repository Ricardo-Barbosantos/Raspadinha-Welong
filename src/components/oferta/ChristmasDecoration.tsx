import { Sparkles } from 'lucide-react';

interface ChristmasDecorationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ChristmasDecoration = ({ size = 'md', className = '' }: ChristmasDecorationProps) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Sparkles className="w-full h-full text-christmas-gold animate-twinkle" fill="currentColor" />
    </div>
  );
};

export default ChristmasDecoration;
