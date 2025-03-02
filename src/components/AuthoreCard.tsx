import Image from "next/image";
import Moiz from "../images/moiz.JPG";



export default function AuthorCard (){
    return(
        <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
            <div className="flex items-center animation-fadeIn">
            <Image src="Moiz" alt="Author Image" width={64} height={64} className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500" />  
                <div>
                    <h3 className="text-xl font-bold">Moiz Qureshi</h3>
                    <p className="text-slate-500">Web Developer | Graphic Designer | Web Designer</p>
                </div>
            </div>
            <p className="mt-4 text-black leading-relaxed">Moiz Qureshi is an experienced Graphic designer with a passion for Web Development and sharing Knowledge through Web Designing.</p>
            <div className="mt-4 flex space-x-3">
                <a href="https://www.facebook.com/profile.php?id=100089981983705" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">Facebook</a>
                <a href="https://github.com/MoizQureshi1" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">GitHubt</a>
                <a href="https://www.youtube.com/@solve-swift" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">YouTube</a>
            </div>
        </div>
    )
}
