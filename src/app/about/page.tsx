import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function AuthorCard (){
    return(
        <>
        <Header/>
        <div className="bg-neutral-100 shadow-lg rounded-lg p-6 pt-12 pb-9">
            <div className="animation-fadeIn">
                <div className="flex justify-center">
            <Image src="/images/moiz.jpg" alt="Author Image" width={64} height={64} className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500" />  
            </div>
                <div>
                    <h3 className="text-xl font-bold text-center">Moiz Qureshi</h3>
                    <p className="text-slate-500 text-center">Web Developer | Graphic Designer | Web Designer</p>
                </div>
            </div>
            <p className="mt-4 text-black leading-relaxed text-center">Moiz Qureshi is an experienced Graphic designer with a passion for Web Development and sharing Knowledge through Web Designing.</p>
            <div className="flex justify-center">
            <div className="mt-4 flex space-x-3">
                <a href="https://www.facebook.com/profile.php?id=100089981983705" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">Facebook</a>
                <a href="https://github.com/MoizQureshi1" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">GitHubt</a>
                <a href="https://www.youtube.com/@solve-swift" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">YouTube</a>
            </div>
            </div>
        </div>
        <Feature/>
        <Footer/>
        </>
    )
}