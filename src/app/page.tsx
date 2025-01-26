"use client";
import { GalarySection } from "@/components/GalarySection";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {ServicesSection} from "@/components/ServicesSection";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import {CoreTeam} from "@/components/CoreTeam";
import {BookCall} from "@/components/BookCall";
import { PremiumPartners } from "@/components/PremiumPartner";

  
export default function Home() {
  

  return (
    <div>
    <HeroSection/>
    <AboutSection/>
    <GalarySection/>
    <ServicesSection/>
    <PremiumPartners/>
   <BookCall/>
    <TestimonialSection/>
    <CoreTeam/>
    </div>
  );
}
