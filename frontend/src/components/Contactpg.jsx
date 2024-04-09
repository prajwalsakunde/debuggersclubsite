import React, { useEffect, useState } from "react";

const Contactpg = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    let script;
    const loadScript = () => {
      script = document.createElement("script");
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.async = true;
      document.body.appendChild(script);
    };

    if (!window.VismeFormsEmbed) {
      // If VismeFormsEmbed is not already loaded, lazy load the script
      loadScript();
    }

    const handleFormSubmission = () => {
      setFormSubmitted(true);
    };

    window.addEventListener("visme_form_submit", handleFormSubmission);

    return () => {
      window.removeEventListener("visme_form_submit", handleFormSubmission);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <div
      id="contact1"
      className="pt-5 contact1 flex flex-col justify-center relative w-full h-2/3 sm:h-3/4 md:h-lvh"
    >
      <div className="relative flex flex-col justify-center items-center w-full text-center">
        <h2 className="text-4xl md:text-6xl lg:text-9xl font-sans font-light text-indigo-900">Connect now!</h2>
        <p className="mt-2 text-xl xl:text-2xl font-thin">This is all you need to know</p>
        <div className="relative  sm:w-1/2 justify-center items-center" id="vismeFormContainer">
        <div className="visme_d flex justify-center items-center" data-title="Contact Us" data-url="kkjv6w47-contact-us" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="52809"></div>

        </div>
      </div>
    </div>
  );
};

export default Contactpg;
