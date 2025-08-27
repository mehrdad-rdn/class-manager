import CommunitySection from "@/components/community-section";
import FAQsTwo from "@/components/faqs";
import FeatureCards from "@/components/features-cards";
import StagesAccordion from "@/components/stages-accordion";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PlansComparator from "@/components/plans-comparator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StagesAccordion />
      <FeatureCards />
      <PlansComparator />
      <CommunitySection />
      <FAQsTwo />
      <FooterSection />
    </>
  );
}
