import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card"
import Image from "next/image";

interface BlogCardProps {
    post: {id: string; title: string; description: string; date: string; imageURL: string };
    isDarkBackground: boolean;
}

export default function BlogCard ({post, isDarkBackground}: BlogCardProps){
    return(
        <Card className= {`p-4 ${isDarkBackground ? 'bg-slate-800 text-white' : 'text-slate-800'} rounded-lg shadow-lg hover:shadow-xl duration-300 transition-transform transform hover:scale-105`}>
            <Image src={post.imageURL} alt={post.title} width={100} height={100} className="w-full h-48 object-cover rounded-t-lg"/>
            <CardTitle className='text-xl font-normal mt-4 text-center'>{post.title}</CardTitle>
            <br />
            <CardContent className='text-center'><p>{post.description}</p></CardContent>
            <div className="flex flex-col items-center mt-4">
                <a href={`/posts/${post.id}`} className={`w-full px-6 text-white bg-blue-600 rounded hover:bg-blue-500 ${isDarkBackground ? 'bg-black hover:bg-red-500': 'bg-black hover:bg-red-500'}`}>Read More</a>
            </div>
        </Card>
    );
}