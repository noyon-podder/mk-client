import Container from "../../components/Container";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { fadeVariants } from "../../utils/variants";
import { IoMdQuote } from "react-icons/io";

const MissionSection = () => {
  const [controls, ref] = useScrollAnimation();
  return (
    <section
      ref={ref}
      className="mission-section py-16 bg-white dark:bg-color-cardColor"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Image with Overlay */}
          <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeVariants}
              className="xl:w-[500px] xl:h-[300px] lg:w-[400px] lg:h-[200px] hidden lg:block bg-color-baseColor absolute top-0 0left-"
            ></motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeVariants}
              className="relative xl:mt-10 xl:ml-10 lg:mt-5 lg:ml-5"
            >
              <img
                src={
                  "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Right Column - Text */}
          <div className="w-full md:w-1/2 md:pl-10">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeVariants}
              className="text-left"
            >
              <div className="relative">
                <h2 className="lg:text-5xl text-3xl  font-mono font-bold mb-4 text-gray-800 dark:text-gray-200">
                  NS Shop Mission
                </h2>
                <div className="hidden lg:block text-color-baseColor opacity-5 dark:opacity-25 text-[120px] -top-10 -right-5 absolute mb-4">
                  <IoMdQuote />
                </div>
              </div>
              <p className="text-lg text-color-textColor dark:text-color-darkTextColor mb-4">
                We integrate systems and technologies designed by our team of
                scientists and engineers, with the most advanced technologies
                available to deliver more reliable and efficient energy
                projects. Our global platform is our strength.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
