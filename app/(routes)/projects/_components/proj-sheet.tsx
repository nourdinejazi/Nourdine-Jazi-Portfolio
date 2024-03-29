import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Project } from "@prisma/client";
import TabPrev from "./tab-prev";
import { Image as ProjectImage } from "@prisma/client";

interface ProjSheetProps {
  title?: string;
  link?: string;
  desc?: string;
  img?: string;
  icon?: string;
  project:
    | (Project & {
        images: ProjectImage[];
      })
    | null;
}

const ProjSheet: React.FC<ProjSheetProps> = ({
  title,
  link,
  desc,
  img,
  icon,
  project,
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-[300px]  cursor-pointer   h-[150px] relative ring-1 ring-neutral-800 rounded-xl shadow-md bg-[#181622] text-white">
          <div className="w-full flex items-center justify-start p-4 gap-3">
            <Image
              src={`${img}`}
              className=" "
              width={26}
              height={26}
              alt=""
            ></Image>
            <div className="flex flex-col items-start justify-start">
              <h3 className="font-semibold ">{title}</h3>
              <span className="text-sm">{link}</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-4 flex gap-3">
            <Image src={`${icon}`} height={20} width={20} alt=""></Image>
            <span className="text-neutral-400 text-sm font-medium">{desc}</span>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="flex text-white    flex-col gap-10 p-16 sm:p-1 overflow-auto">
        <SheetHeader className="border-b border-gray-500">
          <SheetTitle>
            <div className="w-full flex items-center justify-start  p-4 gap-5">
              <Image
                src={`/github-mark.svg`}
                className=" "
                width={50}
                height={50}
                alt=""
              ></Image>
              <h3 className="font-semibold text-white text-4xl ">{title}</h3>
            </div>
          </SheetTitle>
        </SheetHeader>
        <TabPrev project={project} />
      </SheetContent>
    </Sheet>
  );
};

export default ProjSheet;
