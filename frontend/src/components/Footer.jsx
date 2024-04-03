import React from "react";
import insta from "../assets/instagram.png"
import gmail from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center p bg-black text-white">
      <div className="relative flex gap-10 md:gap-20 flex-row pt-10">
        <section className="flex flex-row justify-center items-center">
          <a
            href="https://www.instagram.com/debuggersclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_self"
            className="group flex justify-center text-white font-semibold hover:translate-y-3  transition-all d1ration-500"
          >
            <img src={insta} alt='insta' 
              viewBox="0 0 24 24"
              
              fill="currentColor"
              stroke="currentColor"
              className="w-7 h-7" />
            <span
              className="absolute opacity-0 group-hover:opacity-100 group-hover: text-slate-200  group-hover:text-sm group-hover:-translate-y-7 duration-700"
            >
              Instagram
            </span>
          </a>
        </section>
        <section className="flex flex-row justify-center items-center">
          <a
            href="mailto: debuggersclubkkwieer@gmail.com"
            target="_blank"
            className="group flex justify-center text-white font-semibold hover:translate-y-3  transition-all d1ration-500"
          >
            <img src={gmail} alt='insta' 
              viewBox="0 0 24 24"
              
              fill="currentColor"
              stroke="currentColor"
              className="w-7 h-7" />
            <span
              className="absolute opacity-0 group-hover:opacity-100 group-hover: text-slate-200  group-hover:text-sm group-hover:-translate-y-7 duration-700"
            >
              Mail
            </span>
          </a>
        </section>
        <section className="flex flex-row justify-center items-center">
          <a
            href="https://www.linkedin.com/company/debuggers-club-kkwieer/mycompany/"
            target="_self"
            className="group flex justify-center text-white font-semibold hover:translate-y-3  transition-all d1ration-500"
          >
            <img src={linkedin} alt='insta' 
              viewBox="0 0 24 24"
              
              fill="currentColor"
              stroke="currentColor"
              className="w-7 h-7" />
            <span
              className="absolute opacity-0 group-hover:opacity-100 group-hover: text-slate-200  group-hover:text-sm group-hover:-translate-y-7 duration-700"
            >
              LinkedIn
            </span>
          </a>
        </section>
        <section className="flex flex-row justify-center items-center">
          <a
            href="/"
            className="group flex justify-center text-white font-semibold hover:translate-y-3  transition-all d1ration-500"
          >
            <img src={twitter} alt='insta' 
              viewBox="0 0 24 24"
              
              fill="currentColor"
              stroke="currentColor"
              className="w-7 h-7" />
            <span
              className="absolute opacity-0 group-hover:opacity-100 group-hover: text-slate-200  group-hover:text-sm group-hover:-translate-y-7 duration-700"
            >
              Twitter
            </span>
          </a>
        </section>
      </div>
      <div className="relative lg:mx-12 mt-6 w-11/12 h-px bg-gray-300">
        <br />
      </div>
      <div className="relative flex flex-col justify-center items-center font-inter font-medium py-7 sm:p-8 lg:p-5 text-5xl sm:text-8xl md:text-9xl xl:text-11xl" >
        <a>
        Debuggers'
        </a>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 font-mono text-gray-200 text-sm pb-8"
      >

        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <span>since 1988</span>
      </div>
    </footer>
  );
};

export default Footer;