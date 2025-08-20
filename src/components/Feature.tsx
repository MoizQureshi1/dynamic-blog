import React from "react";
import AdsenseAd from "./adsence";

export default function Feature (){
    return(
        <div>
            <section className="py-8 bg-neutral-100 mb-40">
                <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">Moiz Qureshi: Navigating the Secrets of Technology in Tech Chronicles Blog!</h2>
                <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">Join Moiz Qureshi as he delves into the dynamic world of web development. Form Foundational concepts to advanced techniques, This Blog is packed with insights, tutorials, tips to empower aspiring developers in crafting stunning and functional website. Explore, Learn and elevate your web development Journey!</p>
                <div className="mx-auto max-w-7xl px-5">
                    <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring Our Categories</h1>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
                        {[
                            "Technology",
                            "Artificial Intelligence",
                            "HTML",
                            "Virtual Reality",
                            "Next JS",
                            "Web Development",
                        ].map((categoty, index) => (
                            <div key={index} className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600">
                                <p className="text-center text-lg font-semibold">{categoty}</p>
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100  mt-10">Learning web development involves acquiring the skills to build websites and applications. It includes mastering front-end technologies like HTML, CSS, and JavaScript, as well as back-end development using databases, servers, and APIs. With the rise of AI, developers are also incorporating intelligent features such as machine learning, chatbots, and personalized content. Understanding frameworks like React, Node.js, and tools for automation can significantly enhance productivity. Combining web development with AI empowers developers to create smarter, more interactive, and dynamic web applications.</p>
            </section>
            <AdsenseAd />
        </div>
    )
}