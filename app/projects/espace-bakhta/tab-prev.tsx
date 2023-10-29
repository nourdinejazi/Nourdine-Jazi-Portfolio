import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SimpleSlider from "./carousel";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const TabPrev = () => {
    return ( 
<Tabs defaultValue="Preview" className="w-full  h-full  px-4  ">
  <TabsList >
    <TabsTrigger value="Preview">Preview</TabsTrigger>
    <TabsTrigger value="Description">Description</TabsTrigger>
  </TabsList>
  <TabsContent className="  " value="Preview">
      <div className=" w-full flex items-center justify-center my-4">
            <span className="text-purple-500  flex items-center justify-center gap-2">Scroll Down <ArrowDown size={20} /> </span>
      </div>
      <SimpleSlider />
  </TabsContent>
  <TabsContent className=" text-slate-300 h-full " value="Description">
    <div className="w-full h-full  mt-16  flex items-start justify-center   ">
        <p className="lg:max-w-[1000px]  md:w-[90%]  sm:w-full text-lg p-2 sm:text-base ">Crafted with <span className="text-purple-500">Next js and Tailwind CSS</span>, the Espace Bakhta website embodies seamless navigation and elegant design. Tailwind CSS adds a touch of finesse with responsive layouts.  <Link className="text-purple-500" href="https://www.espace-bakhta.tn/"  >(www.espace-bakhta.tn)</Link>.</p>

    </div>
  </TabsContent>
</Tabs>
     );
}
 
export default TabPrev;