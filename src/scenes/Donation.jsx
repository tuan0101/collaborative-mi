import { motion } from "framer-motion";

const newTab= (url) => {
    window.open(url)
}
const Donation = ({ setSelectedPage }) => {
    return (
        <section
            id="donate"
        //className="md:flex md:justify-between md:items-center"
        >

            <div className="relative bg-gradient-to-t from-green-900 to-purple-700 ">

                <img
                    alt="profile"
                    className="w-full" //mix-blend-overlay
                    //src="assets/photos/background.jpg"
                    src="https://images.pexels.com/photos/6994806/pexels-photo-6994806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="absolute sm:top-[20%] xs:top-[10%] top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2
                    lg:text-5xl md:text-4xl xs:text-2xl font-mono font-semibold bg-gray-900">
                    <p className="">
                        Join Our Mission
                    </p>

                </div>
                <div className="absolute w-[80%] top-[35%] xs:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2
                    lg:text-3xl md:text-2xl sm:text-xl xs:text-sm text-xs font-mono font-bold text-center bg-gray-900">
                    <p className="">
                        Once again, thank you for your kindness and generosity. We are honored to have your support, and we couldn't be more grateful. Your compassion and belief in our cause inspire us to continue our mission with renewed determination.
                    </p>
                   
                </div>

                {/* <AnchorLink
                            className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                            onClick={() => setSelectedPage("contact")}
                            href="#contact"
                        >
                            Learn More
                        </AnchorLink> */}
                <div className="absolute md:top-[55%] top-[65%] w-[80%]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.75 }}
                        variants={{
                            hidden: { opacity: 0, y: 120 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <button className="relative mx-auto mb-4 left-[12%] w-[100%] h-[20%]"
                            onClick={()=> newTab("https://www.paypal.com/donate/?business=T4VJGXPUVWHRY&no_recurring=0&item_name=The%20Vietnamese%20Collaborative%20of%20Michigan%20is%20deeply%20grateful%20for%20your%20trust%20and%20belief%20in%20our%20organization%27s%20vision%0A&currency_code=USD&source=qr")}
                        >
                            <img
                                className=" mx-auto w-[30%]
                            hover:filter hover:saturate-200 transition duration-500 z-10"
                                alt="profile"
                                src="assets/photos/paypal.png"
                            />
                        </button>


                        <img
                            className="relative mx-auto left-[12%] w-[20%] h-[10%]"
                            alt="profile"
                            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png"
                        />
                    </motion.div>
                </div >
            </div>
        </section>
    );
};

export default Donation;