import { Button } from '@/components/oferta/ui/button';
import { Badge } from '@/components/oferta/ui/badge';

interface KitCardProps {
  image: string;
  title: string;
  subtitle: string;
  daysOfUse: string;
  unitPrice?: string;
  originalPrice: string;
  currentPrice: string;
  installments: string;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange' | 'teal';
  isHighlighted?: boolean;
  shippingText?: string;
  discountPercentage?: number;
  showDiscountBadge?: boolean;
  discountAmount?: string;
  purchaseUrl?: string;
}

const KitCard = ({
  image,
  title,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subtitle,
  daysOfUse,
  unitPrice,
  originalPrice,
  currentPrice,
  installments,
  badge,
  badgeColor = 'blue',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isHighlighted = false,
  shippingText = "Frete Grátis",
  discountPercentage,
  showDiscountBadge = false,
  discountAmount,
  purchaseUrl
}: KitCardProps) => {
  const badgeStyles = {
    blue: 'bg-blue-600 text-white',
    green: 'bg-green-600 text-white',
    purple: 'bg-purple-600 text-white',
    orange: 'bg-orange-500 text-white',
    teal: 'bg-teal-500 text-white'
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Top Badge */}
      {badge && (badge === 'MAIS COMPLETO' || badge === 'MAIS VENDIDO') && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className={`${badgeStyles[badgeColor]} px-3 py-1 sm:px-4 sm:py-1 text-xs sm:text-sm font-bold rounded-full shadow-lg whitespace-nowrap`}>
            {badge}
          </Badge>
        </div>
      )}

      {/* Card container with white background matching the prints */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl py-1 px-0 sm:p-4 lg:p-6 h-full flex flex-col justify-between shadow-lg sm:border sm:border-gray-200 min-h-[420px] sm:min-h-[520px] lg:min-h-[560px]">

        {/* Product Image */}
        <div className="mb-4 sm:mb-4 lg:mb-6 mx-0 sm:-mx-4 lg:-mx-6 -mt-1 sm:-mt-4 lg:-mt-6 relative">
          <img
            src={image}
            alt={title}
            className="block w-full h-auto sm:h-48 md:h-52 lg:h-60 xl:h-64 object-contain rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl bg-gray-50"
            style={{ objectPosition: 'center top' }}
          />

          {/* Discount Badge positioned over image */}
          {showDiscountBadge && discountPercentage && (
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-rose-600 text-white px-3 py-2 text-sm font-bold rounded-full shadow-md">
                {discountPercentage}% OFF
              </Badge>
            </div>
          )}
        </div>

        {/* Regular badges (not MAIS COMPLETO or MAIS VENDIDO) */}
        {badge && badge !== 'MAIS COMPLETO' && badge !== 'MAIS VENDIDO' && (
          <div className="flex justify-center mb-4 sm:mb-4 px-3 sm:px-0">
            <Badge className={`${badgeStyles[badgeColor]} px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-sm font-bold rounded-full shadow-sm`}>
              {badge}
            </Badge>
          </div>
        )}

        {/* Product Info */}
        <div className="text-center mb-6 sm:mb-4 flex-grow flex flex-col px-3 sm:px-0 space-y-2">
          <div className="h-auto min-h-[5rem] lg:h-24 xl:h-20 flex items-center justify-center mb-2">
            <h3 className={`font-bold text-ds-primary leading-tight px-1 text-center ${title.length > 40
              ? 'text-base sm:text-xs md:text-sm lg:text-base'
              : 'text-lg sm:text-sm md:text-base lg:text-lg'
              }`}>
              {title}
            </h3>
          </div>

          <p className="text-gray-700 text-base sm:text-sm md:text-base mb-4 font-semibold">
            {daysOfUse}
          </p>

          {unitPrice && (
            <p className="text-gray-500 text-sm sm:text-sm mb-4">
              {unitPrice}
            </p>
          )}
        </div>

        {/* Pricing */}
        <div className="text-center mb-4 sm:mb-4 px-3 sm:px-0">
          {/* Promotional Text */}
          {showDiscountBadge && (
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 px-2">
              <span className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-wide text-center leading-tight bg-amber-100 px-3 py-1 rounded-full">
                Promoção Especial
              </span>
            </div>
          )}

          {originalPrice && (
            <div className="text-gray-500 text-lg sm:text-xl md:text-2xl line-through mb-2 font-medium">
              {originalPrice}
            </div>
          )}

          <div className="relative">
            <div className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-ds-primary">
              {currentPrice}
            </div>
          </div>

          {/* Savings Amount */}
          {discountAmount && showDiscountBadge && (
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 px-2">
              <span className="text-xs sm:text-sm font-bold text-green-800 px-3 sm:px-3 py-1 rounded-full whitespace-nowrap bg-green-100">
                Economize {discountAmount}
              </span>
            </div>
          )}

          <div className="text-sm sm:text-sm text-gray-600">
            {installments}
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-3 sm:px-0">
          <Button
            className="w-full bg-ds-cta-primary hover:bg-ds-cta-hover text-white font-bold py-4 px-4 sm:py-4 sm:px-6 md:py-5 md:px-8 rounded-xl sm:rounded-2xl text-base sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center whitespace-normal break-words text-center min-h-[56px] sm:min-h-[52px] md:min-h-[56px] shadow-md"
            onClick={() => purchaseUrl && window.open(purchaseUrl, '_blank')}
          >
            COMPRAR AGORA
          </Button>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center justify-center gap-2 mt-3 mb-1 px-3 sm:px-0">
          <span className="text-base sm:text-sm">🚛</span>
          <span className="text-sm sm:text-sm font-semibold text-gray-700">{shippingText}</span>
        </div>
      </div>
    </div>
  );
};

export default KitCard;
