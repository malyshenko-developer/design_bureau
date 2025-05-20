import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { slides } from "./contstants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Realization = () => {
  return (
    <div className="pb-20">
      <div className="flex justify-between mb-12">
        <h3 className="text-2xl uppercase">Реализация</h3>

        <p className="text-6xl max-w-[850px] font-semibold pb-7 border-b border-b-gray-400">
          27 завершенных проектов в 2024 году
        </p>
      </div>

      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-6">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-6 basis-1/3">
              <div className="aspect-6/7 relative">
                <Image
                  src={slide.image}
                  alt="image"
                  fill={true}
                  className="-z-10 rounded-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-10 flex justify-between">
          <div className="flex gap-6">
            <CarouselPrevious className="static translate-y-0 size-14" />
            <CarouselNext className="static translate-y-0 size-14" />
          </div>

          <Button variant={"outline"} className="uppercase text-lg">
            Все проекты
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

export default Realization;
