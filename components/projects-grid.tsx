import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsGrid = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 items-center justify-center mt-32 mb-16">
      <h1 className="text-5xl font-semibold text-white">Projects Overview</h1>
      <span className="text-xl mb-10  text-[#878593]">
        projects i worked on for my portfolio and with real clients
      </span>
      <div className="w-[60%] sm:w-full  grid min-h-[1000px] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
        <div className="projectGrid1 lg:p-8 p-4  lg:col-span-2 rounded-xl flex lg:flex-row md:flex-col sm:flex-col   ">
          <div className="lg:min-w-[60%] sm:w-full md:w-full flex flex-col justify-center items-start gap-5 p-4 pl-12 ">
            <h1 className="text-4xl sm:text-3xl text-start font-semibold text-white">
              Clothify
            </h1>
            <p className="text-lg text-start text-[#878593] ">
              clothing website meticulously crafted mainly using Next.js, React,
              and Tailwind CSS. Seamlessly connected to an intuitive admin
              interface
            </p>
            <Link href="/projects/espace-bakhta">
              <span className="  text-[#853BCE] flex items-center justify-center text-base font-medium hover:bg-opacity-80 hover:underline ">
                View Project <ArrowRight size={18} />
              </span>
            </Link>
          </div>
          <div className="overflow-hidden sm:w-full md:w-full flex items-center justify-center">
            <Image
              src={"/mock-clothify.png"}
              width={600}
              quality={100}
              height={500}
              alt=""
              className="rounded-xl"
            ></Image>
          </div>
        </div>
        <div className="projectGrid2  p-8 rounded-xl ">
          <div className="flex  flex-col gap-8 items-center justify-center w-full h-full">
            <h1 className="text-4xl sm:text-3xl   text-start font-semibold text-white">
              Espace bakhta
            </h1>
            <div className="overflow-hidden sm:w-full md:w-full flex items-center justify-center">
              <Image
                src={"/mock-bakhta.png"}
                width={600}
                quality={100}
                height={500}
                alt=""
                className="rounded-xl"
              ></Image>
            </div>
            <Link href="/projects/espace-bakhta">
              <span className="  text-[#853BCE] flex items-center justify-center text-base font-medium hover:bg-opacity-80 hover:underline ">
                View Project <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
        <div className="projectGrid3 text-center  p-8 rounded-xl">
          <div className="flex flex-col gap-8 items-center justify-center w-full h-full">
            <h1 className="text-4xl sm:text-3xl  text-start font-semibold text-white">
              Bakhta Manager
            </h1>
            <div className="overflow-hidden sm:w-full md:w-full flex items-center justify-center">
              <Image
                src={"/mock-manager.png"}
                width={600}
                quality={100}
                height={500}
                alt=""
                className="rounded-xl"
              ></Image>
            </div>
            <Link href="/projects/espace-bakhta">
              <span className="  text-[#853BCE] flex items-center justify-center text-base font-medium hover:bg-opacity-80 hover:underline ">
                View Project <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
        <div className="projectGrid4 lg:p-8 p-4  rounded-xl lg:col-span-2">
          <div className="lg:min-w-[60%] sm:w-full md:w-full flex flex-col justify-center items-start gap-5 p-4 pl-12 ">
            <h1 className="text-4xl sm:text-3xl text-start font-semibold text-white">
              Portfolio website
            </h1>
            <p className="text-lg text-start text-[#878593] ">
              Utilized NextJS, ReactJS, and TailwindCSS to code a responsive and
              interactive website for my personal portfolio
            </p>
            <Link href="/projects/espace-bakhta">
              <span className="  text-[#853BCE] flex items-center justify-center text-base font-medium hover:bg-opacity-80 hover:underline ">
                View Project <ArrowRight size={18} />
              </span>
            </Link>
          </div>
          <div className="overflow-hidden sm:w-full md:w-full flex items-center justify-center">
            <Image
              src={"/mock-portfolio.png"}
              width={600}
              quality={100}
              height={500}
              alt=""
              className="rounded-xl"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
