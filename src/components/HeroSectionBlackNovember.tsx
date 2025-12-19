import { MarqueeBanner } from "./MarqueeBanner";
import mockupImage from "@/assets/mockup-touca-escova.png";

export const HeroSectionBlackNovember = () => {
  return (
    <section className="bg-black">
      <div className="py-4 px-4 pt-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-black mb-2 text-yellow-400 uppercase tracking-tight leading-tight">
          Black November<br />
          Welong Hair
        </h1>
        
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">
          🚨 É o fim da queda de cabelo!
        </h2>
        
        <div className="mb-6">
          <img 
            src={mockupImage} 
            alt="Welong Hair - Tratamento Capilar Completo" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        
        <p className="text-base md:text-lg text-gray-300 mb-2">
          Conheça o tratamento que está transformando a autoestima de milhares de mulheres no Brasil!
        </p>
      </div>
      </div>

      <MarqueeBanner />
    </section>
  );
};
