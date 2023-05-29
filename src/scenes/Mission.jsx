import LineGradient from "../hooks/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Mission = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section
            id="mission"

        >
            <div>
                <h1 className="lg:text-6xl md:text-5xl xs:text-3xl text-center font-playfair my-5"> OUR MISSION</h1>
            </div>
            
            <div className="md:flex md:justify-between md:items-center gap-8 md:h-full h-full">
                {/* IMAGE SECTION */}
                <div className="basis-[70%] z-10 md:mt-8 mb-8 flex justify-center ">
                    <div>
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src="assets/photos/mission.jpg"
                        />
                    </div>
                </div>
                {/* MAIN TEXT */}
                <div className="z-30 basis-2/5 mt-12 md:mt-16">
                    {/* HEADINGS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="text-4xl font-playfair z-10 text-center md:text-start font-semibold mb-2">
                            The <span className="text-red">Goal</span>                            
                        </p>
                        {isAboveLarge? (<LineGradient width="w-1/4" />) :("") }
                        <p className="mt-4 mb-7 text-sm text-center md:text-start">
                            Our mission is to provide aid to Vietnamese communities with <br />
                            limited access to resources through empowerment and advocacy. <br />
                            We thrive to promote social, economic, and political equality. <br />
                            Through collaborative partnerships, education, and advocacy, <br />
                            we work to eliminate systemic barriers and promote policies <br />
                            that promote fairness, justice, and inclusion. Our vision is <br />
                            a society where all individuals have the opportunity to thrive <br />
                            and reach their full potential, and where diversity <br />
                            is celebrated and valued.
                        </p>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default Mission;
