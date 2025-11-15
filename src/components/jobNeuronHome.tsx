import Footer from "@/src/components/footer/footer";
import HeroSection from "@/src/components/heroSection/heroSection";
import HomePageCareerCTA from "@/src/components/homePageCareerCTA/homePageCareerCTA";
import HomePageFAQ from "@/src/components/homePageFAQ/homePageFAQ";
import HomePageMilestones from "@/src/components/homePageMilestones/homePageMilestones";
import HomePageOfferLetters from "@/src/components/homePageOfferLetters/homePageOfferLetters";
import HomePagePricingPlans from "@/src/components/homePagePricingPlans/homePagePricingPlans";
import HomePageSteps from "@/src/components/homePageSteps/homePageSteps";
import HomePageVideo from "@/src/components/homePageVideo/homePageVideo";
import HomePageWhyChooseFF from "@/src/components/homePageWhyChooseFF/homePageWhyChooseFF";
import Navbar from "@/src/components/navbar/navbar";

const JobNeuronHome = () => {
  return (
    <>
      <Navbar />
      <HeroSection /> {/* using useState, so client */}
      <HomePageVideo />
      <HomePageMilestones /> {/* using useState, so client */}
      <HomePageSteps />
      <HomePageOfferLetters /> {/* using useState, so client */}
      <HomePageWhyChooseFF /> {/* AJ section not so good */}
      <HomePagePricingPlans />
      <HomePageFAQ /> {/* using useState, so client */}
      <HomePageCareerCTA />
      <Footer />
    </>
  );
};

export default JobNeuronHome;
