import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProps {
  items?: number; // Number of items in the carousel
}

export function Carousel({ items = 10 }: CarouselProps) {
  // Array of placeholder image URLs
  const images = [
    "https://optim.tildacdn.one/tild3936-3463-4130-b632-346634653463/-/format/webp/Frame_2085664757.png",
    "https://optim.tildacdn.one/tild3339-3636-4563-a335-646638613139/-/format/webp/Group_2085664498.png",
    "https://via.placeholder.com/1200x800?text=Image+3",
    "https://via.placeholder.com/1200x800?text=Image+4",
    "https://via.placeholder.com/1200x800?text=Image+5",
    "https://via.placeholder.com/1200x800?text=Image+6",
    "https://via.placeholder.com/1200x800?text=Image+7",
    "https://via.placeholder.com/1200x800?text=Image+8",
    "https://via.placeholder.com/1200x800?text=Image+9",
    "https://via.placeholder.com/1200x800?text=Image+0",
  ];

  return (
    <>
      <div className="max-w-7xl relative mx-auto py-12 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-5xl font-bold dark:text-[#52e500] text-center mb-8">
          Proof of work
        </h1>
        <div className="flex items-center justify-center">
          <ShadCarousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[95vw] h-[40vh] sm:h-[40vh] lg:h-[40vh] mt-40"
          >
            <CarouselContent>
              {Array.from({ length: items }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[100%] sm:basis-[50%] lg:basis-[33.33%]"
                >
                  <div className="p-4 sm:p-6">
                    <Card>
                      <CardContent className="flex aspect-[16/9] items-center justify-center overflow-hidden bg-black">
                        <img
                          src={images[index % images.length]} // Cycle through images
                          alt={`Carousel item ${index + 1}`}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-4xl md:text-5xl" />
            <CarouselNext className="text-4xl md:text-5xl" />
          </ShadCarousel>
        </div>
      </div>
    </>
  );
}
