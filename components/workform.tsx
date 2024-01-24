"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  ArrowBigRightDash,
  ArrowRight,
  ArrowRightFromLine,
} from "lucide-react";

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

const WorkFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const formData: FormDataProps = {
      name,
      email,
      message,
    };
    if (!name || !email || !message) {
      toast.error("Some fields are missing");
    } else {
      toast.success("Message sent successfully");
      const response = await axios.post(`/api`, formData);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className=" mt-16 w-full h-auto  flex lg:flex-row  sm:flex-col md:flex-col  justify-center sm:items-center md:items-center  lg:items-start gap-20   ">
      {/* <div className="p1 lg:w-[30%] md:w-[80%] sm:w-[80%] flex flex-col gap-5  ">
            <h1 className="lg:text-6xl md:text-3xl  sm:text-3xl text-white">Let's work together!</h1>
            <p className="text-lg sm:text-base  text-white">Like my work and want something similar for your company? Sure, let's get to business!</p>
        </div> */}
      {/* <div className="lg:w-[50%] lg:h-[50%] md:w-[60%] md:h-[60%] sm:w-[80%] sm:h-[100%]     ">
        <form
          onSubmit={onSubmit}
          className="w-full  h-full   lg:grid lg:grid-cols-2 md:flex md:flex-col  sm:flex sm:flex-col   gap-10 "
        >
          <div className="flex flex-col  justify-center mx-4 ">
            <span className="text-white text-lg text-opacity-70">
              Your Name
            </span>
            <input
              type="text"
              className="bg-transparent text-purple-500  border-b border-purple-500 border-opacity-70 p-4 outline-none placeholder-white placeholder:opacity-40   "
              onChange={(ev) => setName(ev.target.value)}
              value={name}
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col justify-center  mx-4">
            <span className="text-white text-lg text-opacity-70">
              Email Address
            </span>
            <input
              type="text"
              className="bg-transparent text-purple-500  border-b border-purple-500 border-opacity-70 p-4 outline-none placeholder-white placeholder:opacity-40    "
              onChange={(ev) => setEmail(ev.target.value)}
              value={email}
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col justify-center    lg:col-span-2 mx-4">
            <span className="text-white text-lg text-opacity-70">
              Your Message
            </span>
            <input
              type="text"
              className="bg-transparent text-purple-500 border-b border-purple-500 border-opacity-70 p-4 outline-none placeholder-white placeholder:opacity-40   "
              onChange={(ev) => setMessage(ev.target.value)}
              value={message}
              placeholder="Hi, I think we need an app  for our products at Company X. How soon can you hop on to discuss this?"
            />
          </div>

          <div className="flex flex-col justify-center   col-span-2 mx-4">
            <button className="lg:w-[30%] md:w-[50%] text-white sm:w-[80%] border bg-transparent m-auto  border-purple-700  sm:text-xs flex items-center justify-center gap-2 relative group   ">
              <div className="absolute inset-0 transition-all font-medium bg-purple-700 origin-left transform scale-x-0 group-hover:scale-x-100 duration-300"></div>
              <div className="hover:text-white   py-6 hover:font-medium bg-transparent  z-50 w-full h-full p-4 sm:p-2  flex items-center justify-center gap-2">
                SHOOT <ArrowRight />
              </div>
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default WorkFrom;
