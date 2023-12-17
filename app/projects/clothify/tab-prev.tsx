import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SimpleSlider from "./carousel";
import Link from "next/link";
import Image from "next/image";
import long_cap_clothify_big from "/public/long_cap_clothify_big.png";
import { ArrowDown, ArrowRight, Link2Icon } from "lucide-react";

export const revalidate = 0;

const TabPrev = () => {
  return (
    <Tabs defaultValue="Preview" className="w-full  h-full  px-4  ">
      <TabsList>
        <TabsTrigger value="Preview">Preview</TabsTrigger>
        <TabsTrigger value="Description">Description</TabsTrigger>
      </TabsList>
      <TabsContent className="" value="Preview">
        <div className=" w-full flex items-center justify-center my-4">
          <span className="text-purple-500  flex items-center justify-center gap-2">
            Scroll Down <ArrowDown size={20} />
            <Link
              className="text-bl underline text-white flex gap-2 items-center justify-center "
              href="https://clothify-store.vercel.app/"
              target="_"
            >
              clothify-store.app <Link2Icon></Link2Icon>
            </Link>
          </span>
        </div>
        <SimpleSlider />
      </TabsContent>
      <TabsContent className=" text-slate-300 h-full " value="Description">
        <div className="w-full h-full  mt-16  flex items-start justify-center   ">
          <p className="lg:max-w-[1000px]  md:w-[90%]  sm:w-full text-lg p-2 sm:text-base  ">
            • Clothify, sophisticated clothing website meticulously crafted
            mainly using{" "}
            <span className="text-bl">Next.js, React, and Tailwind CSS</span>.
            Seamlessly connected to an intuitive{" "}
            <Link
              className="text-bl underline"
              href={"/work/clothify-admin"}
              target="_"
            >
              admin interface
            </Link>{" "}
            through <span className="text-bl  ">APIs</span>{" "}
            <Link
              className="text-bl underline text-purple-500"
              href="https://clothify-store.vercel.app/"
              target="_"
            >
              Visit live :(clothify-store.app)
            </Link>
            .
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabPrev;
