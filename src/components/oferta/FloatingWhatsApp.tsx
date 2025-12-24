import whatsappFloat from '@/assets/oferta/whatsapp-float.png';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5511911725889"; // Format: country code + area code + number
    const message = encodeURIComponent("👋 Olá! Gostaria de um kit personalizado da Welong Hair!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <img
        src={whatsappFloat}
        alt="WhatsApp"
        onClick={handleWhatsAppClick}
        className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer hover:scale-110 transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl"
      />
    </div>
  );
};

export default FloatingWhatsApp;
