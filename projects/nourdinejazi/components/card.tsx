"use client"
import {  motion , useAnimation , useInView } from "framer-motion";
import {useRef , useEffect} from "react"
import Link from "next/link";
import Image from "next/image"
import { invalidate } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import { ShapesIcon } from "lucide-react";
import { Shadow } from "@react-three/drei";

interface CardProps {
    title : string
    paragraph : string
    icon  : string
    boxs : string
    color : string
    titleColor : string
    shadow : string
    repoLink? : string
    className? : string
}

const Card : React.FC<CardProps> = ({
    title,
    paragraph,
    icon, 
    boxs,
    color,
    titleColor,
    shadow,
    repoLink,
    className
}) => {

    const ref = useRef(null)
    const isInView = useInView(ref , { once : false})
    const mainControls = useAnimation()

    const variants = {
        hidden: { opacity: 0 , y : 75 },
        visible: { opacity: 1 , y : 0 },
      }

      useEffect(()=>{
        if (isInView){
            mainControls.start("visible")   
        }   
    },[isInView])


    return ( 
        <motion.div
        className={cn(`${shadow} sm:w-full   md:max-w-[400px] m-auto flex flex-col items-start p-8 justify-start gap-2 max-h-[300px] border border-${color} shadow-lg  relative rounded-xl overflow-hidden`,className)}
        initial={"hidden"}
        variants={variants}
        animate={mainControls}
        transition={{duration : .5}}
        ref={ref}
      >
            <div  style={{backgroundImage  : `url(/${boxs})`}} className="  absolute    -bottom-4 right-0 w-[110px] h-[110px]">
                <div className={(`  rounded-full border border-opacity-50 absolute -bottom-1 -right-2  bg-[#13111C] border-${color} w-[90px] h-[90px] `)}>
                    <Link className=" " href={repoLink ? repoLink : "/"} target={repoLink ? "_blanc" : "" }  ><Image   src={icon} height={20} width={20}  alt="img" className=" absolute bottom-10 left-8 "></Image></Link>
                </div>
            </div>
            <h1 className={cn(`font-semibold  text-start text-xl`  , titleColor)}>{title}</h1>
            <p className="text-gray-400 md:w-[70%] w-[60%] text-sm sm:text-xs text-start  z-10">{paragraph}</p>
        </motion.div>
     );
}
 
export default Card;