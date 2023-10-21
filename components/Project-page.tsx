"use client"
import Card from "./card";
import Image from "next/image";

import {  motion , useInView ,useAnimation} from "framer-motion";
import {useEffect , useState , useRef} from 'react'

const ProjectsPage = () => {

    const [translationY, setTranslationY] = useState(0);
    const ctr=useAnimation()
    const ref = useRef(null)
    const ref2=useRef(null)
    const isInView = useInView(ref,)
    const isInView2 = useInView(ref2)

    useEffect (()=>{
        if(isInView2){
            ctr.start("visible")
        }
    },[isInView2])

    useEffect(()=>{
        if (isInView){
            window.addEventListener('scroll',()=>{
                let scrollPercentage=(document.documentElement.scrollTop+document.body.scrollTop) /(document.documentElement.scrollHeight-document.documentElement.clientHeight)
                setTranslationY(scrollPercentage*300)
               
            } ); 
        }
    },[isInView])

    return ( 
        <div className="diagonal2  w-full min-h-screen flex flex-col gap-10 text-center">
        <motion.div 
          
          variants={{
              hidden : {opacity : 0 ,y : 75},
              visible : {opacity : 1 ,y : 0},
          }}
          initial="hidden"
          animate={ctr}
          transition={{duration : 0.5 ,delay : 0.25}}
  
          className=" p-3   flex flex-col  items-center justify-center   gap-5"
          >
            <div ref={ref2} className="text-green-400 border-2 border-green-400 rounded-full bg-green-400 bg-opacity-10  w-16 h-16 m-auto text-4xl text-center pt-2  ">2</div>
            <p className=" text-green-400 text-3xl font-semibold mt-16 ">Projects.</p>
            <span className="text-4xl font-semibold sm:text-2xl text-white  ">Some of my projects with real clients</span>
            <div className="bg-green-400 w-[160px] h-[1px] m-auto "/>
            <p className="text-white text-base sm:text-sm md:w-[80%]  lg:w-1/2 sm:w-full m-auto sm:text-center">
                With a strong foundation in these technologies, I deliver scalable, high-performance web solutions that exceed client expectations.            </p>
        </motion.div>
        <div className="ld:grid lg:grid-cols-3  md:grid md:grid-cols-3 sm:grid sm:grid-cols-1  sm:w-full  p-8  m-auto gap-10 mb-32">
            <Card className="bg-[#181622]" repoLink="https://github.com/nourdinejazi/clothify-store" shadow="greenCard" titleColor="text-[#95D0B4]" color="green-400" title="Clothify" paragraph="Clothify, sophisticated commercial website  crafted mainly using Next.js..." icon="svgexport-13.svg"  boxs="svgexport-12.svg"></Card>
            <div  className="w-52 h-full relative sm:hidden  row-span-2  flex  gap-7 items-center justify-center m-auto">
                <div   className="green-track w-4  h-[140%] sm:hidden  " ></div>
                <div   className="green-track w-4  h-[140%]sm:hidden  " ></div>
                <div   className="green-track w-4  h-[140%] sm:hidden  " ></div>

                <Image 
                    src="/svgexport-15.svg"
                    width={10} height={10} alt="img"
                    ref={ref} 
                    className="sm:hidden  w-6   bottom-0 "
                    style={{position : `absolute` , top : `0`, left: `29%`, transform: `translateX(-50%) translateY(${translationY}px)   translateZ(0px)`}}
                ></Image> 
                <Image 
                    src="/svgexport-16.svg"
                    width={10} height={10} alt="img"
                    ref={ref} 
                    className="sm:hidden  w-6   bottom-0 "
                    style={{position : `absolute` , top : `0`, left: `50%`, transform: `translateX(-50%) translateY(${translationY}px)   translateZ(100px)`}}
                ></Image> 
                <Image 
                    src="/svgexport-17.svg"
                    width={10} height={10} alt="img"
                    ref={ref} 
                    className="sm:hidden  w-6   bottom-0 "
                    style={{position : `absolute` , top : `0`, left: `71%`, transform: `translateX(-50%) translateY(${translationY}px)   translateZ(0px)`}}
                ></Image>           
            </div>
            <Card className="bg-[#181622]" repoLink="https://github.com/nourdinejazi/espace-bakhta" shadow="greenCard" titleColor="text-[#95D0B4]"  color="green-400" title="Espace Bakhta" paragraph="Website for a local  event venue with reservation form handled in the admin interface" icon="svgexport-13.svg" boxs="svgexport-12.svg"></Card>
            <Card className="bg-[#181622]" repoLink="https://github.com/nourdinejazi/clothify-admin" shadow="greenCard"titleColor="text-[#95D0B4]"  color="green-400"title="Clothify Dashboard" paragraph="Meticulously crafted for seamless management of your online clothing store..." icon="svgexport-13.svg" boxs="svgexport-12.svg"></Card>
            <Card className="bg-[#181622]"shadow="greenCard" titleColor="text-[#95D0B4]" color="green-400" title="Bakhta Manager" paragraph="A management interface the event venue Espace Bakhta..." icon="svgexport-13.svg" boxs="svgexport-12.svg"></Card>
        </div>
            

        </div>
     );
}
 
export default ProjectsPage;