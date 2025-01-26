import { GalarySection } from "@/components/GalarySection";
import {ServicesSection} from "@/components/ServicesSection";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import {CoreTeam} from "@/components/CoreTeam";
import {BookCall} from "@/components/BookCall";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <AboutSection/>
    <GalarySection/>
    <ServicesSection/>
   <BookCall/>
    <TestimonialSection/>
    <CoreTeam/>
    </div>
  );
}
