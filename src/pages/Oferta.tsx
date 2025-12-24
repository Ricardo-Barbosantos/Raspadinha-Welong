import { useState, useEffect } from 'react';
import { Zap, Flame } from 'lucide-react';
import Countdown from '@/components/oferta/Countdown';
import KitCard from '@/components/oferta/KitCard';
import WhatsAppButton from '@/components/oferta/WhatsAppButton';
import FloatingWhatsApp from '@/components/oferta/FloatingWhatsApp';
import BlackNovemberDecoration from '@/components/oferta/BlackNovemberDecoration';
import welongLogo from '@/assets/oferta/welong-logo-circular.png';
import kitCrescimento8Img from '@/assets/oferta/kit-crescimento-8-updated.png';
import kitCrescimento5Img from '@/assets/oferta/kit-crescimento-5.png';
import kitCrescimento3CompletoImg from '@/assets/oferta/kit-crescimento-3-completo.png';
import kitCrescimento3Img from '@/assets/oferta/kit-crescimento-3.png';
import kitCrescimento1Img from '@/assets/oferta/kit-crescimento-1.png';
import antifrizz1Img from '@/assets/oferta/kit-antifrizz-1.png';
import antifrizz3Img from '@/assets/oferta/kit-antifrizz-3.png';
import antifrizz3BrindesImg from '@/assets/oferta/kit-antifrizz-3-brindes.png';
import antifrizz6Img from '@/assets/oferta/kit-antifrizz-6.png';
import antifrizz12Img from '@/assets/oferta/kit-antifrizz-12.png';
import LightningEffect from '@/components/oferta/LightningEffect';

const LG4 = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setRenderKey(prev => prev + 1); // Force re-render
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    // Also listen for orientation changes
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 100);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isDesktop = windowWidth >= 1024;

  const antiquedaProducts = [
    {
      image: kitCrescimento8Img,
      title: "8 TÔNICOS + 2 SHAMPOOS + 2 CONDICIONADORES",
      subtitle: "Welong 300 dias",
      daysOfUse: "300 dias de uso",
      unitPrice: "Cada unidade por R$ 42",
      originalPrice: "de R$ 597 por",
      currentPrice: "R$ 507",
      installments: "",
      badge: "MAIS COMPLETO",
      badgeColor: 'blue' as const,
      isHighlighted: true,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 90",
      purchaseUrl: "https://seguro.welong.com.br/r/8XS231Z2E2"
    },
    {
      image: kitCrescimento5Img,
      title: "5 TÔNICOS + 1 SHAMPOO + 1 CONDICIONADOR",
      subtitle: "Welong 180 dias",
      daysOfUse: "180 dias de uso",
      unitPrice: "Cada unidade por R$ 48",
      originalPrice: "de R$ 397 por",
      currentPrice: "R$ 337",
      installments: "",
      badge: "MAIS VENDIDO",
      badgeColor: 'green' as const,
      isHighlighted: true,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 60",
      purchaseUrl: "https://seguro.welong.com.br/r/LJRKLC27ZM"
    },
    {
      image: kitCrescimento3CompletoImg,
      title: "3 TÔNICOS + 1 SHAMPOO + 1 CONDICIONADOR",
      subtitle: "Welong 90 dias",
      daysOfUse: "90 dias de uso",
      unitPrice: "Cada unidade por R$ 50",
      originalPrice: "de R$ 297 por",
      currentPrice: "R$ 252",
      installments: "",
      badgeColor: 'purple' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 45",
      purchaseUrl: "https://seguro.welong.com.br/r/FD4K9PSQAM"
    },
    {
      image: kitCrescimento3Img,
      title: "3 UNIDADES TÔNICO WELONG HAIR",
      subtitle: "Welong 90 dias",
      daysOfUse: "90 dias de uso",
      unitPrice: "Cada unidade por R$ 56",
      originalPrice: "de R$ 197 por",
      currentPrice: "R$ 167",
      installments: "",
      badgeColor: 'orange' as const,
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 30",
      purchaseUrl: "https://seguro.welong.com.br/r/I12JQ9EW62"
    },
    {
      image: kitCrescimento1Img,
      title: "1 UNIDADE TÔNICO WELONG HAIR",
      subtitle: "Welong 30 dias",
      daysOfUse: "30 dias de uso",
      unitPrice: "Cada unidade por R$ 133",
      originalPrice: "de R$ 157 por",
      currentPrice: "R$ 133",
      installments: "",
      badgeColor: 'teal' as const,
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 24",
      purchaseUrl: "https://seguro.welong.com.br/r/PMTH7XOQT0"
    }
  ];

  const antiFrizzProducts = [
    {
      image: antifrizz12Img,
      title: "12 UNIDADES ANTIFRIZZ WELONG HAIR",
      subtitle: "365 Dias de Uso",
      daysOfUse: "365 Dias de Uso",
      unitPrice: "Cada unidade por R$ 42",
      originalPrice: "de R$ 597 por",
      currentPrice: "R$ 507",
      installments: "",
      badge: "MAIS COMPLETO",
      badgeColor: 'blue' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 90",
      purchaseUrl: "https://seguro.welong.com.br/r/EKBPIOTT2X"
    },
    {
      image: antifrizz6Img,
      title: "6 UNIDADES ANTIFRIZZ WELONG HAIR",
      subtitle: "180 Dias de Uso",
      daysOfUse: "180 Dias de Uso",
      unitPrice: "Cada unidade por R$ 56",
      originalPrice: "de R$ 397 por",
      currentPrice: "R$ 337",
      installments: "",
      badge: "MAIS VENDIDO",
      badgeColor: 'green' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 60",
      purchaseUrl: "https://seguro.welong.com.br/r/5346O6ROMB"
    },
    {
      image: antifrizz3BrindesImg,
      title: "3 UNIDADES ANTIFRIZZ + SHAMPOO E CONDICIONADOR",
      subtitle: "150 Dias de Uso",
      daysOfUse: "150 Dias de Uso",
      unitPrice: "Cada unidade por R$ 50",
      originalPrice: "de R$ 297 por",
      currentPrice: "R$ 252",
      installments: "",
      badgeColor: 'purple' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 45",
      purchaseUrl: "https://seguro.welong.com.br/r/EZ07XXUVL8"
    },
    {
      image: antifrizz3Img,
      title: "3 UNIDADES ANTIFRIZZ WELONG HAIR",
      subtitle: "90 dias de Uso",
      daysOfUse: "90 dias de Uso",
      unitPrice: "Cada unidade por R$ 56",
      originalPrice: "de R$ 197 por",
      currentPrice: "R$ 167",
      installments: "",
      badgeColor: 'orange' as const,
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 30",
      purchaseUrl: "https://seguro.welong.com.br/r/K85541H6H2"
    },
    {
      image: antifrizz1Img,
      title: "1 UNIDADE ANTIFRIZZ WELONG HAIR",
      subtitle: "30 dias de Uso",
      daysOfUse: "30 dias de Uso",
      unitPrice: "Cada unidade por R$ 133",
      originalPrice: "de R$ 157 por",
      currentPrice: "R$ 133",
      installments: "",
      badgeColor: 'green' as const,
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 24",
      purchaseUrl: "https://seguro.welong.com.br/r/9KRT6F4R0A"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      <LightningEffect />
      {/* Faixa Vermelha com Cupom - Fixa */}
      <div className="fixed top-0 left-0 right-0 w-full py-1.5 sm:py-2 shadow-lg z-50" style={{ backgroundColor: '#FF0000' }}>
        <div className="container mx-auto text-center">
          <p className="text-white text-sm sm:text-base font-bold tracking-wide">
            ⚡ CUPOM: <span className="text-yellow-300">BLACK15</span> ⚡
          </p>
        </div>
      </div>

      {/* Espaçamento para compensar a faixa fixa */}
      <div className="h-10 sm:h-12"></div>

      {/* Decorações Black November */}
      <div className="fixed top-10 left-10 opacity-30 z-0">
        <BlackNovemberDecoration size="lg" />
      </div>
      <div className="fixed top-32 right-16 opacity-20 z-0">
        <BlackNovemberDecoration size="md" />
      </div>
      <div className="fixed bottom-20 left-16 opacity-25 z-0">
        <BlackNovemberDecoration size="sm" />
      </div>
      <div className="fixed bottom-40 right-10 opacity-30 z-0">
        <BlackNovemberDecoration size="lg" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-1 sm:py-6 px-0 sm:px-4">
        <div className="container mx-auto flex justify-center">
          <div className="relative">
            <img
              src={welongLogo}
              alt="Welong Hair"
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain"
            />
            <div className="absolute -top-2 -right-2">
              <BlackNovemberDecoration size="sm" className="opacity-80" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-1 sm:py-8 px-0 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black-november-gold" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="bg-gradient-to-r from-black-november-gold via-black-november-orange to-black-november-gold bg-clip-text text-transparent">
                  OFERTA RELÂMPAGO
                </span>
              </h1>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black-november-gold" />
            </div>
            <div className="flex items-center justify-center gap-4 mb-2">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-black-november-orange" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-black-november-orange to-black-november-gold bg-clip-text text-transparent">
                BLACK NOVEMBER
              </h2>
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-black-november-orange" />
            </div>
          </div>

          <Countdown />

          <div className="overflow-hidden whitespace-nowrap bg-gradient-to-r from-black-november-orange via-black-november-gold to-black-november-orange py-4 mt-4 sm:mt-6 md:mt-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] shadow-glow">
            <div className="animate-marquee inline-block text-base sm:text-lg md:text-xl text-black font-bold">
              {Array(100).fill("⚡ BLACK NOVEMBER 🔥 ÚLTIMAS UNIDADES 🔥 APROVEITE AGORA ⚡          ").join("")}
            </div>
          </div>
        </div>
      </section>

      {/* Linhas de Produtos */}

      {/* Linha Crescimento e Antiqueda */}
      <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-0 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-4 sm:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black-november-gold flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black-november-gold to-black-november-orange bg-clip-text text-transparent text-center px-1 sm:px-4">
                LINHA CRESCIMENTO E ANTIQUEDA
              </h2>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black-november-gold flex-shrink-0" />
            </div>
            <div className="flex justify-center gap-2">
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
            </div>
          </div>

          <div
            key={`antiqueda-${renderKey}`}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto"
          >
            {antiquedaProducts.map((product, index) => (
              <div key={index} className="min-h-[440px] sm:min-h-[550px] lg:min-h-[600px]">
                <KitCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha Antifrizz */}
      <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-0 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black-november-gold" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black-november-gold to-black-november-orange bg-clip-text text-transparent text-center px-4">
                LINHA ANTIFRIZZ
              </h2>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black-november-gold" />
            </div>
            <div className="flex justify-center gap-2">
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
            </div>
          </div>

          <div
            key={`antifrizz-${renderKey}`}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto"
          >
            {antiFrizzProducts.map((product, index) => (
              <div key={index} className="min-h-[440px] sm:min-h-[550px] lg:min-h-[600px]">
                <KitCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <WhatsAppButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-2 sm:py-8 px-0 sm:px-4 border-t border-black-november-gold/30 bg-card">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4 gap-3">
            <Zap className="w-4 h-4 text-black-november-gold" />
            <Flame className="w-4 h-4 text-black-november-orange" />
            <Zap className="w-4 h-4 text-black-november-gold" />
          </div>
          <p className="text-foreground text-xs sm:text-sm font-semibold">
            © 2025 Welong Hair. Todos os direitos reservados.
          </p>
          <p className="text-black-november-orange text-sm mt-2 font-bold">
            ⚡ BLACK NOVEMBER - DESCONTOS IMPERDÍVEIS! 🔥
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default LG4;
