import AuthorCard from "@/components/AuthoreCard";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Mega from "@/components/Mega";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header/>
      <Feature/>
      <Mega/>
      <AuthorCard/>
      <Footer/>
    </div>
  );
}