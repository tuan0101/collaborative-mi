import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import AboutStaff from "./scenes/About/AboutStaff";
import AboutMission from "./scenes/About/AboutMission";
import AboutHistory from "./scenes/About/AboutHistory";
import Carousel from "./scenes/Carousel";
import History from "./scenes/History";
import Mission from "./scenes/Mission";
import Staff from "./scenes/Staff";
import Contact from "./scenes/Contact";
import Donation from "./scenes/Donation";
import Youtube from "./scenes/Youtube";

import { motion } from "framer-motion";
import LineGradient from "./hooks/LineGradient";
import { useState, useEffect } from "react";




function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const slides = [
    "assets/photos/slide2.jpg",
    "assets/photos/slide3.jpg",
    "assets/photos/slide4.jpg",
    "assets/photos/slide5.jpg",
    "assets/photos/slide6.jpg",
    "assets/photos/slide7.jpg",
    "assets/photos/slide8.jpg",
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      />
      <Landing setSelectedPage={setSelectedPage} />

      <LineGradient />
      <div className="pb-4">
        <Youtube
          selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
      </div>

      
        <div className="text-5xl font-playfair font-semibold text-red z-10 text-center py-5 ">
          About Us
        </div>
        <div className="w-5/6 mx-auto xs:mt-2">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("ourstaff")}
          >
            <AboutStaff setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>

        <div className="w-[90%] mx-auto  m-10">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("ourhistory")}
          >
            <AboutHistory setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>

        <div className="w-5/6 mx-auto pb-10">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("ourmission")}
          >
            <AboutMission setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>
      


      <LineGradient />
      <div className="bg-white">
      <div className="py-10 w-[70%]  mx-auto" >
        <Carousel>
          {[
            ...slides.map((s) =>
              <img src={s} alt="tony" />)
          ]}
        </Carousel>
      </div>
      </div>


      <LineGradient />
      <div className="w-[90%] mx-auto xs:mt-2">
        <History
          selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
      </div>


      <LineGradient />
      <div className="bg-white">
        <Mission
          selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
      </div>

      <LineGradient />
      <div className="">
        <Staff
          selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
      </div>

      <LineGradient />
      <Donation setSelectedPage={setSelectedPage} />

      <LineGradient />
      <div className="my-10 pb-12">
        <Contact
          selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  );
}

export default App;
