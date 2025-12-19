import { HeroSectionBlackNovember } from "@/components/HeroSectionBlackNovember";
import { ProductInfo } from "@/components/ProductInfo";
import { ResultsSection } from "@/components/ResultsSection";
import { HowItWorksRoulette } from "@/components/HowItWorksRoulette";
import { PromotionSectionRoulette } from "@/components/PromotionSectionRoulette";
import { UrgencySection } from "@/components/UrgencySection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { FixedTopBanner } from "@/components/FixedTopBanner";

const Page3 = () => {
  return (
    <div className="min-h-screen bg-black">
      <FixedTopBanner />
      <HeroSectionBlackNovember />
      <ProductInfo />
      <ResultsSection />
      <HowItWorksRoulette />
      <MarqueeBanner />
      <PromotionSectionRoulette />
      <MarqueeBanner />
      <UrgencySection />
    </div>
  );
};

export default Page3;
