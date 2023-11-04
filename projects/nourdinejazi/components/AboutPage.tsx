import Image from "next/image";

const AboutPage = () => {
    return ( 
    <div  className="diagonalAbout    w-full min-h-screen flex flex-col gap-10 text-center">

            <div  className=" p-3  flex flex-col  items-center justify-center   gap-5">
                <div className="text-purple-500 border-2 border-purple-500 rounded-full bg-purple-500 bg-opacity-10  w-16 h-16 m-auto text-4xl text-center pt-2  ">3</div>
                <p className=" text-purple-500 text-3xl font-semibold mt-16 ">About Me.</p>
                <span className="text-4xl font-semibold text-white sm:text-2xl "> if you haven't already gathered that by now</span>
                <div className="bg-purple-500 w-[160px] h-[1px] m-auto "/>
                <p className="text-white sm:w-full sm:text-sm text-base w-1/2 m-auto">
                I specialize   in front-end by craft  engaging user interfaces that captivate and connect. Outside of work, i have a strong passion for fitness and a penchant for occasional adventures. When I'm not immersed in code, you'll often find me at the gym, lifting weights, or out in nature, exploring new places.
                </p>
            </div>
            <div className=" relative  m-auto  ">
                <Image src={'/svgexport-21.svg'}  width={700} height={700} alt="img"  ></Image>
            </div>
        

    </div>
     );
}
 
export default AboutPage;