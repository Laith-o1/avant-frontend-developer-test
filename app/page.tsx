import Navbar from "./ui/utils/navbar";
import Hero from "./ui/index/hero";
import OurStory from "./ui/index/ourStory";
import Cards from "./ui/index/cards";
import Startup from "./ui/index/statrup";
import Discover from "./ui/index/Discover";
import Comments from "./ui/index/comments";
import Network from "./ui/index/network";
import Footer from "./ui/utils/footer";
export default function Home() {
  return (

    <main className="min-h-screen w-screen grid grid-flow-col grid-cols-12">
      <div className="col-span-12 col-start-1 w-full absolute top-0 z-10"><Navbar /></div>
      <div id="Investors" className="col-span-12 col-start-1 overflow-hidden"><Hero /></div>
      <div id="Our-Story" className="col-span-12 col-start-1 overflow-hidden "><OurStory /></div>
      <div id="Services" className="col-span-10 col-start-2 overflow-hidden"> <Cards /></div>
      <div id="startup" className="col-span-12 col-start-1 overflow-hidden"> <Startup /></div>
       <div id="Investor-Sign-In" className="col-span-10 col-start-2 overflow-hidden"> <Discover /> </div>
        <div id="commentes" className="col-span-10 col-start-2 overflow-hidden"> <Comments /> </div>
        <div id="Contact" className="col-span-10 col-start-2 overflow-hidden"> <Network /> </div>
        <br />
        <br />
        <br />
        <div id="footer" className="col-span-12 col-start-1 overflow-hidden"> <Footer /> </div>
       
       
  </main>
  );
}
