import { heroSectionData } from "@/src/data/herosection";
import HeroSectionClient from "./herSectionClient";

export default function HeroSection() {
  return <HeroSectionClient data={heroSectionData} />;
}