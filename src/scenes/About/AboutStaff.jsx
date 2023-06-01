import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const AboutStaff = ({ setSelectedPage }) => {
  return (
    <section
      id="ourstaff"
      className="sm:grid sm:grid-cols-2 gap-4 items-center"
    >
      {/* IMAGE SECTION */}
      <div className="sm:flex sm:justify-start sm:order-2 flex justify-center">
        <div>
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 max-w-[400px] md:max-w-[500px]"
            //src="assets/photos/staff.jpg"
            src="collaborative-mi/assets/photos/staff.jpg"
          />
        </div>
      </div>
      {/* MAIN TEXT */}
      <div className="z-30 basis-4/5">
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
          <p className="text-5xl font-playfair z-10 text-center sm:text-center">
            Our Staff
          </p>

          <p className="my-2 text-sm text-center sm:text-center">
            Meeting the amazing team making all of this happen
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center sm:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("staff")}
            href="#staff"
          >
            Learn More
          </AnchorLink>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStaff;