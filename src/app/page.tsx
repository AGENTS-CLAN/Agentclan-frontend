"use client";
import { GalarySection } from "@/app/home/GalarySection";
import React from 'react';
import {ServicesSection} from "@/app/home/ServicesSection";
import { HeroSection } from "@/app/home/HeroSection";
import { AboutSection } from "@/app/home/AboutSection";
import TestimonialSection from "@/app/home/TestimonialSection";
import {CoreTeam} from "@/app/home/CoreTeam";
// import {BookCall} from "@/components/common/BookCall";
import { PremiumPartners } from "@/app/home/PremiumPartner";
import BookCallBanner from "./home/Banner";

  
export default function Home() {
  

  return (
    <div>
    <HeroSection/>
    <AboutSection/>
    <GalarySection/>
    <ServicesSection/>
    <PremiumPartners/>
   {/* <BookCall/> */}
   <BookCallBanner/>
    <TestimonialSection/>
    <CoreTeam/>
    </div>
  );
}
