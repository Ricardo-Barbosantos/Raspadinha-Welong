import { useState, useEffect } from "react";

export const FixedTopBanner = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const productInfoSection = document.getElementById('product-info-section');
      if (productInfoSection) {
        const rect = productInfoSection.getBoundingClientRect();
        setScrolled(rect.top < 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-red-600 py-2 px-4 text-center fixed top-0 left-0 right-0 z-50">
      <p className="text-white font-bold text-sm md:text-base uppercase">
        {scrolled 
          ? "CLIQUE EM COMPRAR AGORA PARA DESCOBRIR O DESCONTO EXCLUSIVO"
          : "VOCÊ DESBLOQUEOU UMA SUPER OFERTA!"
        }
      </p>
    </div>
  );
};
