"use client"

import Card from "./card";
import Image from "next/image";
import {  motion , useInView ,useAnimation} from "framer-motion";
import {useEffect , useState , useRef} from 'react'




const SecondPage = () => {

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
                setTranslationY(scrollPercentage*200)
               
            } ); 
        }
    },[isInView])

    return ( 
    <div className="diagonal w-full min-h-screen flex flex-col gap-10 text-center ">
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
            <div ref={ref2} className="text-blue-500 border-2 border-blue-500 rounded-full bg-blue-500 bg-opacity-10  w-16 h-16 m-auto text-4xl text-center pt-2  ">1</div>
            <p className=" text-blue-500 text-3xl font-semibold mt-16 ">Tech Stack.</p>
            <span className="text-4xl sm:text-2xl font-semibold text-white  ">Dynamic and responsive web applications</span>
            <div className="bg-blue-500 w-[160px] h-[1px] m-auto "/>
            <p  className="text-white text-base sm:text-sm md:w-[80%]  lg:w-1/2 sm:w-full m-auto sm:text-center">
                I specialize in crafting  web applications that seamlessly integrate the power of modern technologies. With a focus on user experience and clean code architecture, I bring projects to life using a robust tech stack that includes mainly Next.js, React, Tailwind CSS, TypeScript, Prisma...
            </p>
        </motion.div >
        <div className="  ld:grid lg:grid-cols-3  md:grid md:grid-cols-3 sm:grid sm:grid-cols-1  sm:w-full  p-8  m-auto gap-10 mb-32">
            <Card  shadow="card" titleColor="text-[#6DA7F2]" color="blue-500" title="NextJs" paragraph="Handles the tooling and configuration needed for React, and provides additional structure." icon="svgexport-6.svg"  boxs="svgexport-5.svg"></Card>
            <div  className="sm:hidden  w-32 h-full relative  row-span-2  m-auto">
                <div   className=" sm:hidden blue-track w-4 -mt-12 h-[140%] mx-auto   " ></div>
                <Image 
                    src="/svgexport-9.svg"
                    width={10} height={10} alt="img"
                    ref={ref} 
                    className="sm:hidden w-6   bottom-0 "
                    style={{position : `absolute` , top : `0`, left: `50%`, transform: `translateX(-50%) translateY(${translationY}px)   translateZ(0px)`}}
                  ></Image>     
            </div>
            <Card  shadow="card" titleColor="text-[#6DA7F2]" color="blue-500" title="React" paragraph="Uses a component-based approach to create interactive and dynamic user experiences." icon="svgexport-10.svg" boxs="svgexport-5.svg"></Card>
            <Card  shadow="card" titleColor="text-[#6DA7F2]" color="blue-500" title="TypeScript" paragraph="Statically typed superset of JavaScript that adds optional type annotations." icon="svgexport-11.svg" boxs="svgexport-7.svg"></Card>
            <Card  shadow="card" titleColor="text-[#6DA7F2]" color="blue-500" title="TailwindCSS" paragraph="Enhances development efficiency and maintains a consistent design system" icon="svgexport-8.svg" boxs="svgexport-7.svg"></Card>
        </div>
             
    
    </div> 
    
    );
}
 
export default SecondPage;