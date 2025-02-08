
import { FeaturesSection } from "@/pages/Marketing/Feature";
import { Gallery } from "@/pages/Marketing/gallery";
import { HeroSection } from "@/pages/Marketing/Herosection";
import { MarketingBook } from "@/pages/Marketing/MarketingBook";
import { Text } from "@/pages/Marketing/Test";
import { WorldMapSection } from "@/pages/Marketing/WorldMap";
import React from "react";

function mar() {
  return <>
  <HeroSection/>
  <FeaturesSection/>
  <Text/>
  <WorldMapSection/>
  <Gallery/>
  <MarketingBook/>
  </>;
}

export default mar;
