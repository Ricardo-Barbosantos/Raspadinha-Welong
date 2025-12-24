import whatsappButton from '@/assets/oferta/whatsapp-button.webp';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5511911725889"; // Format: country code + area code + number
    const message = encodeURIComponent("👋 Olá! Gostaria de um kit personalizado da Welong Hair!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center pb-6 sm:pb-8 md:pb-12 px-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-ds-primary text-center mb-4 sm:mb-6 px-4">
        DESEJA UM KIT PERSONALIZADO?
      </h3>

      <img
        src={whatsappButton}
        alt="Compre pelo WhatsApp"
        onClick={handleWhatsAppClick}
        className="w-[300px] max-w-[90%] cursor-pointer hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default WhatsAppButton;
