import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Project } from "@prisma/client";
import { Image as ProjectImage } from "@prisma/client";
import ImgComponent from "./img-component";

interface PrevCarouselProps {
  project:
    | (Project & {
        images: ProjectImage[];
      })
    | null;
}

const imageLoader = ({ src, width, quality }: any) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export function PrevCarousel({ project }: PrevCarouselProps) {
  return (
    <Carousel className=" max-w-[1000px] sm:w-full md:w-[90%]  m-auto ">
      <CarouselContent className="">
        {project?.images.map((image: ProjectImage) => (
          <CarouselItem key={image.imageId}>
            <CardContent className=" p-0 m-0    ">
              <div className="lg:h-[450px] md:h-[350px] sm:h-[300px] overflow-auto rounded-xl">
                <ImgComponent url={image.url} />
              </div>
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm:hidden" />
      <CarouselNext className="sm:hidden" />
    </Carousel>
  );
}
