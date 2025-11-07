import HeroSection from "@/src/components/heroSection/heroSection";
import HomePageMilestones from "@/src/components/homePageMilestones/homePageMilestones";
import HomePageResultStats from "@/src/components/homePageResultStats/homePageResultStats";
import HomePageVideo from "@/src/components/homePageVideo/homePageVideo";
import Navbar from "@/src/components/navbar/navbar";

const FlashFireHome = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePageVideo />
      <HomePageResultStats />
      <HomePageMilestones />
    </>
  )
  
}

export default FlashFireHome;