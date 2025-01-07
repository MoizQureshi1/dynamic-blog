"use client"
import Link from "next/link";
import React, {useEffect, useState} from "react"
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Header (){

    return(
        <header className="text-gray-400 body-font shadow-lg bg-gray-500">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center sm:px-20 py-4">
                <div className="flex-1 text-black text-4xl font-semibold font-mono">
                    <span>Blog</span>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
                    <Link href="" className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Home</Link>
                    <Link href="about" className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">About</Link>
                    <Link href="blog" className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Blog</Link>
                    <Link href="contact" className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Contact</Link>
                </nav>
                <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank"><button className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-white mt-4 md:mt-0 transition-colors duration-300 transform hover:scale-105">LinkedIn <AiOutlineArrowRight className="pl-1 text-xl"/></button></a>
            </div>
        </header>
    )
}