import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SimpleSlider from "./carousel";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Link2Icon } from "lucide-react";

const TabPrev = () => {
  return (
    <Tabs defaultValue="Preview" className="w-full  h-full  px-4  ">
      <TabsList>
        <TabsTrigger value="Preview">Preview</TabsTrigger>
        <TabsTrigger value="Description">Description</TabsTrigger>
      </TabsList>
      <TabsContent className="  " value="Preview">
        <div className=" w-full flex items-center justify-center my-4">
          <span className="text-purple-500  flex items-center justify-center gap-2">
            Scroll Down <ArrowDown size={20} />{" "}
            <Link
              className="text-bl underline text-white flex gap-2 items-center justify-center "
              href="https://clothify-admin.vercel.app/"
              target="_"
            >
              clothify-admin.app <Link2Icon></Link2Icon>
            </Link>
          </span>
        </div>
        <SimpleSlider />
      </TabsContent>
      <TabsContent className=" text-slate-300 h-full " value="Description">
        <div className="w-full h-full  mt-16  flex items-start justify-center   ">
          <p className="lg:max-w-[1000px]  md:w-[90%]  sm:w-full text-lg p-2 sm:text-base  ">
            Meticulously crafted for seamless management of an online clothing
            store{" "}
            <Link
              className="text-purple-500 underline"
              href="https://clothify-store.vercel.app/"
              target="_blanc"
            >
              clothify-store.app
            </Link>{" "}
            . Developed with{" "}
            <span className="text-purple-500">
              Next.js, React, and TypeScript
            </span>
            , the platform marries the power of dynamic frontend components with
            rock-solid type checking, ensuring a robust and intuitive user
            experience. <span className="text-purple-500">Tailwind CSS</span>{" "}
            lends its aesthetic prowess, delivering a sleek and responsive
            design that adapts flawlessly to any screen size. Beneath the
            surface, the project harnesses the prowess of{" "}
            <span className="text-purple-500">PostgreSQL and Prisma</span> ,
            guaranteeing a reliable and performant database architecture that
            scales effortlessly. With{" "}
            <span className="text-purple-500">Clerk</span> integration, user
            authentication becomes a breeze, enhancing security and
            personalization{" "}
            <Link
              className="text-purple-500 underline"
              href="https://clothify-admin.vercel.app/"
            >
              (clothify-admin.app)
            </Link>
            .
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabPrev;
