import React, { useState, useEffect } from "react";
import codeofiesta from '../assets/codeefiesta.jpg';

const Eventpg = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const eventinfo = [
        {
            id: 1,
            src: codeofiesta,
            title: "Code-O-Fiesta 1",
        },   
        {
            id: 2,
            src: codeofiesta,
            title: "Code-O-Fiesta 2",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % eventinfo.length);
        }, 2000); // Change the transition duration here (in milliseconds)
        return () => clearInterval(interval);
    }, []);

    return (
        <div id='event1' className="event1 flex justify-center relative w-full h-screen">
            <div className="relative py-14 w-full h-screen text-center">
                <h2 className="text-3xl font-bold">Events</h2>
                <div className="flex mx-7 my-4 h-full">
                    <div className="flex relative justify-center items-center flex-col bg-slate-100 w-full h-full">
                        {eventinfo.map(({ id, src, title }, index) => (
                            <div key={id} className={`transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'} ${index === 0 ? 'block' : 'hidden'}`}>
                                <div className="flex flex-row gap-x-32 items-center">
                                    <div className="flex flex-row text-center font-serif text-3xl">
                                        {title}
                                    </div>
                                    <div className="flex flex-row">
                                        <img src={src} className="w-60" alt={title} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eventpg;
