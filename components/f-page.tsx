"use client"

import DepSvg from "./depsvg";
import GitHomePage from "./git-home-page";
import GitHomePageLinked from "./git-home-page-linked";

import FpageText from "./fpage-text";
import DepSvgSmall from "./depsvg-small";
import { useEffect , useState } from "react";
import { Fragment } from "react";

const Fpage = () => {



    const [width, setWidth] = useState(0);
    const breakpoint = 1700;
  
    useEffect(() => {

      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  


      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return ( 
    <div className="fpage  z-10   w-full  sm:h-[70vh] h-screen ">
        <FpageText />
        {
            width>breakpoint ?
            <Fragment>
                <DepSvg /> 
                <GitHomePageLinked />  
            </Fragment>
        : 
            <Fragment>
                <DepSvgSmall />
            </Fragment>
        }
      

       <GitHomePage />

    </div>
     );
}
 
export default Fpage;