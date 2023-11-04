"use client"

import { div } from "three/examples/jsm/nodes/Nodes.js"



const Title = () => {

    return ( 
      <div className=" z-20 pt-32 pb-32 text-center    ">
        <div className=" w-[500px] m-auto">
          <h1 className="  ">
            <span className="hero-title">Hi ,</span> <span className="after-hero ">My name is</span>
          </h1>
          <p className="hero-par text-justify ">
          Nourdine Jazi i'm a Full-stack Developer i specialize in building modern web applications by crafting solid and scalable full-stack products with great user experiences.
          </p>
        </div>
      </div>

    );
}
 
export default Title;