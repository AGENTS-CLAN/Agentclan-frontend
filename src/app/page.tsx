"use client";
import { GalarySection } from "@/app/home/GalarySection";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {ServicesSection} from "@/app/home/ServicesSection";
import { HeroSection } from "@/app/home/HeroSection";
import { AboutSection } from "@/app/home/AboutSection";
import TestimonialSection from "@/app/home/TestimonialSection";
import {CoreTeam} from "@/app/home/CoreTeam";
import {BookCall} from "@/app/home/BookCall";
import { PremiumPartners } from "@/app/home/PremiumPartner";

  
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
