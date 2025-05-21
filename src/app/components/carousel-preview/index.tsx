"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

import { slides } from "./constants";

const CarouselPreview = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      setApi={setApi}
      plugins={[Autoplay({ delay: 6000 })]}
    >
      <CarouselContent className="h-screen">
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="relative cursor-grab active:cursor-grabbing"
          >
            <div className="absolute inset-0 bg-black/30" />
            <Image
              src={slide.image}
              alt="image"
              fill={true}
              className="object-cover -z-10"
            />

            <div className="max-w-[1710px] mx-auto absolute left-10 right-0 bottom-40">
              <h2 className="text-[56px] text-white font-semibold pb-8">
                {slide.title}
              </h2>

              <Button
                variant={"link"}
                className="w-full text-white text-lg uppercase justify-start px-0 has-[>svg]:px-0 group"
              >
                Посмотреть
                <ArrowUpRight className="size-6 transition-transform duration-300 group-hover:rotate-45" />
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-12 left-0 right-0 max-w-[1710px] mx-auto">
        <div className="flex items-center justify-center w-full px-3 relative">
          <div className="absolute left-3">
            <CarouselDots className="static translate-y-0" />
          </div>

          <div className="flex items-center gap-3 text-white">
            <CarouselPrevious className="static translate-y-0 size-14 border-white hover:bg-white hover:text-black" />
            <p className="text-xl font-medium">
              {current.toString().padStart(2, "0")} /{" "}
              {count.toString().padStart(2, "0")}
            </p>
            <CarouselNext className="static translate-y-0 size-14 border-white hover:bg-white hover:text-black" />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselPreview;
