import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowDown, Link2Icon } from "lucide-react";
import { Project } from "@prisma/client";
import { PrevCarousel } from "./prev-carousel";
import { Image as ProjectImage } from "@prisma/client";
interface tabPrevProps {
  project:
    | (Project & {
        images: ProjectImage[];
      })
    | null;
}
const TabPrev = ({ project }: tabPrevProps) => {
  return (
    <Tabs defaultValue="Preview" className="w-full  h-full  px-4  ">
      <TabsList>
        <TabsTrigger value="Preview">Preview</TabsTrigger>
        <TabsTrigger value="Description">Description</TabsTrigger>
      </TabsList>
      <TabsContent className="" value="Preview">
        <div className=" w-full flex  items-center justify-center my-4">
          <span className="text-purple-500   sm:flex-col text-center flex items-center justify-center gap-2">
            <span className="flex items-center justify-center gap-2">
              Scroll Down <ArrowDown size={20} />
            </span>
            <Link
              className="text-bl underline text-white flex gap-2 items-center justify-center "
              href={project?.link || "/projects"}
              target="_"
            >
              {project?.link.replace("https://", "")}
              <Link2Icon></Link2Icon>
            </Link>
          </span>
        </div>
        <div className=" sm:pb-4 md:pb-32 ">
          <PrevCarousel project={project} />
        </div>
      </TabsContent>
      <TabsContent className=" text-slate-300 h-full " value="Description">
        <div className="w-full h-full  mt-16  flex items-start justify-center   ">
          <p className="lg:max-w-[1000px]  md:w-[90%]  sm:w-full text-lg p-2 sm:text-base  ">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: project?.description || "" }}
            ></div>
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabPrev;
