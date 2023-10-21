import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SimpleSlider from "./carousel";
import Link from "next/link";



const TabPrev = () => {
    return ( 
<Tabs defaultValue="Preview" className="w-full  h-full  px-4  ">
  <TabsList >
    <TabsTrigger value="Preview">Preview</TabsTrigger>
    <TabsTrigger value="Description">Description</TabsTrigger>
  </TabsList>
  <TabsContent className=" h-full mb-32" value="Preview">
      <SimpleSlider />
  </TabsContent>
  <TabsContent className=" text-slate-300 h-full " value="Description">
    <div className="w-full  mt-16   ">
        <p className="w-[90%] sm:w-full text-lg p-2 sm:text-base   ">• Clothify, sophisticated clothing website meticulously crafted mainly  using <span className="text-bl">Next.js, React, and Tailwind CSS</span>. Seamlessly connected to an intuitive <Link className="text-bl underline"  href={'/work/clothify-admin' } target="_">admin interface</Link> through <span className="text-bl  ">APIs</span> <Link className="text-bl underline text-purple-500" href="https://clothify-store.vercel.app/" target="_" >Visit live :(clothify-store.app)</Link>.</p>
        
    </div>
  </TabsContent>
</Tabs>
     );
}
 
export default TabPrev;