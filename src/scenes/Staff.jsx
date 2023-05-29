import LineGradient from "../hooks/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Staff = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="staff" className="pt-10 pb-24">
      <div>
        <h1 className="lg:text-5xl xs:text-4xl text-center font-playfair my-5"> OUR STAFF</h1>
      </div>

      {/* SKILLS */}
      <div className="md:flex mt-16 gap-32">
        {/* Thien Huynh */}
        <motion.div
          className="md:w-1/3 lg:ml-10 md:mt-0 xs:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex justify-center ">
            <div className="z-10">
            < img class="w-64 h-64 rounded-full object-contain"
                src="/assets/photos/tony2.jpg" alt="Rounded avatar" />
            </div>
          </div>
          <div className="text-center object-center">

            <p className="mt-5 font-bold">
              Thien Huynh
            </p>
            <p className="mt-2 font-thin text-gray-400">
              president
            </p>
          </div>

        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 md:mt-0 xs:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex justify-center ">
            <div className="z-10">
              < img class="w-64 h-64 rounded-full object-contain" 
              src="/assets/photos/alex2.jpg" alt="Rounded avatar" />
            </div>
          </div>
          <div className="text-center">
            <p className="mt-5 font-bold">
              Alex Macclenaghan
            </p>
            <p className="mt-2 font-light text-gray-400">
            Board of Director
            </p>
          </div>
        </motion.div>
        {/* Vitaly */}
        <motion.div
          className="md:w-1/3 lg:mr-10 md:mt-0 xs:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex justify-center ">
            <div className="z-10">
              < img class="w-64 h-64 rounded-full object-contain" 
              src="/assets/photos/vitaly2.jpg" alt="Rounded avatar" />
            </div>
          </div>
          <div className="text-center">
            <p className="mt-5 font-bold">
              Vitaly Perets
            </p>
            <p className="mt-2 font-light text-gray-400">
              Board of Director
            </p>
          </div>
        </motion.div>
      </div>
      <div className="md:flex mt-16 gap-32">
        {/* Tam */}
        <motion.div
          className="w-[100%] md:mt-0 xs:mt-10" //change this to 2/3 when adding more member
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex justify-center ">
            <div className="z-10">
            < img class="w-64 h-64 rounded-full object-contain"
                src="/assets/photos/tam2.jpg" alt="Rounded avatar" />
            </div>
          </div>
          <div className="text-center object-center">

            <p className="mt-5 font-bold">
              Thi Thanh Tam
            </p>
            <p className="mt-2 font-thin text-gray-400">
              Board of Director
            </p>
          </div>

        </motion.div>

        
      </div>
    </section>
  );
};

export default Staff;