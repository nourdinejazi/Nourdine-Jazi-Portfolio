import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SimpleSlider from "./carousel";
import Link from "next/link";
import Image from "next/image";


const TabPrev = () => {
    return ( 
<Tabs defaultValue="Preview" className="w-full  h-full  px-4  ">
  <TabsList >
    <TabsTrigger value="Preview">Preview</TabsTrigger>
    <TabsTrigger value="Description">Description</TabsTrigger>
  </TabsList>
  <TabsContent className=" h-full  overflow-auto  " value="Preview">
    {/* <Image src={"/long_cap_clothify_big.png"} width={1000} height={2000} quality={100}  className=" rounded-xl mx-auto mt-8"  alt="image"></Image> */}
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