import { Sun } from 'lucide-react';

interface SummerDecorationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SummerDecoration = ({ size = 'md', className = '' }: SummerDecorationProps) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Sun className="w-full h-full text-mellow-yellow" fill="currentColor" />
    </div>
  );
};

export default SummerDecoration;
