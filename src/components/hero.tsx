import Link from "next/link";

export default function Hero (){
    return(
        <>
        <div className="bg-slate-300 text-center lg:px-24 py-40 max-w-screen-2xl mx-auto">
            <h2 className="text-6xl font-extrabold font-serif lg:mx-40">Transform Your Life with Expert Insights Today</h2>
            <p className="text-xl my-6 px-14">Unlock practical advice and actionable tips to enhance your life. Explore expert insights on personal growth, wellness, and productivity. Start your journey to a better you now!</p>
            <div className="flex justify-center gap-8 mt-14">
                <Link href="blog" className=" p-2 px-4 bg-violet-400 rounded-md text-md font-semibold font-sans transition-transform transform hover:scale-105">Get Started Now</Link>
                <Link href="blog" className=" p-2 px-10 bg-violet-400 rounded-md text-md font-semibold font-sans transition-transform transform hover:scale-105">Our Blog</Link>
            </div>
        </div>
        </>
    )
}