import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import bg from "../assets/background.jpg";
const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
      <section
        id="home"
        //className="md:flex md:justify-between md:items-center"
      >
        <div className="relative bg-gradient-to-t from-purple-900 to-green-700 ">
            <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10  " //mix-blend-overlay
                //src="assets/photos/background.jpg"
                src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg"
              />
              <div className="absolute top-[15%] w-[80%]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 3.5 }}
                variants={{
                    hidden: { opacity: 0, y: 120 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <img
                    className="absolute top-[10%] left-[12%] w-[100%]"
                    alt="profile"
                    src="assets/photos/title.png"
                />
            </motion.div>
              </div >

            {/* <div className="absolute top-[15%] left-[20%]">
            <h1 className ="text-black font-opensans font-semibold w-full 
                  
                lg:text-8xl md:text-7xl sm:text-5xl">Vietnamese Collaborative</h1>
            <h1 className ="text-black font-opensans font-semibold w-full 
                absolute left-[30%] top-[90%] 
                lg:text-8xl md:text-7xl sm:text-5xl">Michigan</h1>   

            </div> */}
        </div>        
      </section>
    );
  };
  
  export default Landing;