import AdsenseAd from "@/components/adsence";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header/>
      <AdsenseAd />
      <Hero/>
      <AdsenseAd />
      <Footer/>
    </div>
  );
}