const FpageText = () => {
    return ( 
    <div className="text-white     z-10 absolute top-[30%]  left-[10%]  w-[80%]">
        <span className="fPageTitle">Hi, </span><span className="text-4xl font-semibold">My name is</span>
         <p className=" lg:w-[40%] md:w-[70%]  sm:w-[80%]   text-xl text-[#878593]">Nourdine Jazi i'm a Full-stack Developer i specialize in building modern web applications by crafting solid and scalable full-stack products with great user experiences.</p>
        <button className=" mt-8 w-[250px] h-[50px] rounded-md hover:bg-[linear-gradient(76.35deg,_#7520c9.89%,_#630891_89.75%)] transform transition-transform duration-50 active:scale-95 text-white font-semibold shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#660AC2_15.89%,_#850AC2_89.75%)]">Projects</button>
    </div> 
    );
}
 
export default FpageText;