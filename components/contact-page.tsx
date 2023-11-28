import SVGComponent from "./Svg-comp";
import WorkFrom from "./workform";

const ContactPage = () => {
  return (
    <div className="diagonal3 w-full   min-h-screen flex flex-col text-center">
      <div className=" p-3  flex flex-col  items-center justify-center pt-10  gap-5">
        <div className="text-gray-400 border-2 border-gray-400 rounded-full bg-gray-400 bg-opacity-10  w-16 h-16 m-auto text-4xl text-center pt-2  ">
          4
        </div>
        <p className=" text-gray-400 text-3xl font-semibold mt-16 ">
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

      <SVGComponent />
    </div>
  );
};

export default ContactPage;
