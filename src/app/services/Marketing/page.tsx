
// import { BookCall from "@/components/common/BookCall";
import BookCallBanner from "@/app/home/Banner";
import  CoreTeam from "@/pages/Marketing/CoreTeam";
import  FeaturesSection from "@/pages/Marketing/Feature";
import  Gallery from "@/pages/Marketing/gallery";
import  HeroSection from "@/pages/Marketing/Herosection";
import  Text from "@/pages/Marketing/Test";
import WorldMapSection  from "@/pages/Marketing/WorldMap";
import React from "react";

function mar() {
  return <>
  <HeroSection/>
  <FeaturesSection/>
  <Text/>
  <WorldMapSection/>
  <Gallery/>
  
  <BookCallBanner/>
  {/* <BookCall/> */}
  <CoreTeam/>
  </>;
}

export default mar;
