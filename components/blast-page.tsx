import Link from "next/link";
import WorkFrom from "./workform";

const Blastpage = () => {
  return (
    <div className="bag w-full lg:h-full sm:h-full md:h-full -mt-32 ">
      <div className=" w-full  pt-32   min-h-screen flex flex-col text-center">
        <div className="w-full h-[1px] border mb-16 border-purple-400 skew-y-0" />
        <div className=" p-3   flex flex-col  items-center justify-center pt-10  gap-5">
          <div className="text-purple-500 border-2 border-purple-500 rounded-full bg-purple-500 bg-opacity-10  w-16 h-16 m-auto text-4xl text-center pt-2  ">
            4
          </div>
          <p className=" text-purple-500 text-3xl font-semibold mt-16 ">
            Contact Me.
          </p>
          <span className="text-4xl font-semibold text-white sm:text-2xl  ">
            Got a question or proposal, or just want to say hello? Go ahead.
          </span>
          <div className="bg-gray-400 w-[160px] h-[1px] m-auto " />
          <p className="text-white sm:w-full sm:text-sm  text-base w-1/2 m-auto">
            Shoot me a message if you want to connect! You can also find me on
            Linkedin if that's more your speed.
          </p>
        </div>
        <WorkFrom />
        <div className="lg:w-[50%]  sm:w-[90%] p-4 md:w-[70%] min-h-[400px]  flex flex-col gap-5 items-center  justify-center rounded-xl m-auto mt-52 sm:mt-16 mb-16  border border-white border-opacity-10 bg-white bg-opacity-5 ">
          <h2 className="lg:text-3xl sm:text-xl  md:text-xl font-bold text-white mb-6 max-w-md">
            For more check my Resume and my Github
          </h2>
          <p className="text-gray-500 text-xl">
            Don't hesitate sending me a message or a comment
          </p>
          <div className=" min-w-[300px] h-[120px]  grid  grid-cols-2  mt-8 gap-5">
            <Link
              href="/projects"
              className="w-full h-full   bg-[#853BCE] flex items-center justify-center  rounded-md text-white hover:bg-opacity-80  "
            >
              Projects
            </Link>
            <Link
              href="/resume.pdf"
              className=" w-full h-full  bg-[#853BCE] flex items-center justify-center  rounded-md text-white hover:bg-opacity-80  "
              target="_blanc"
            >
              Resume
            </Link>
            <Link
              href="https://www.github.com/nourdinejazi"
              className="  w-full h-full  bg-[#853BCE] flex items-center justify-center  rounded-md text-white hover:bg-opacity-80  "
              target="_blanc"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/nourdine-jazi/"
              className=" w-full h-full  bg-[#853BCE] flex items-center justify-center  rounded-md text-white hover:bg-opacity-80  "
              target="_blanc"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="w-full h-[500px]"></div>
      </div>
    </div>
  );
};

export default Blastpage;
