import React from "react";
import HighLightText from "../components/core/Homepage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import FoundingStory from "../assets/Images/FoundingStory.png";
import Footer from "../components/common/Footer";
import Quote from "../components/core/AboutPage/Quote";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Statsomponent from "../components/core/AboutPage/Statsomponent";
import ContactForm from "../components/core/AboutPage/ContactForm";
import ColorBlur from "../components/core/Homepage/ColorBlur";

const AboutSection = () => {
  return (
    <div className="text-white ">
      {/* section 1 */}
      <section className="bg-richblack-700 pt-10 ">
        <div className=" w-11/12= max-w-maxContent  mx-auto">
          <header className="mt-3 lg:w-[900px] sm-[300px] mx-auto text-center p-10">
            <h1 className="text-4xl font-bold">
              Driving Innovation in Online Education for a{" "}
              <HighLightText text={"Brighter Future"} />
            </h1>
            <p className="text-richblack-300 mt-5 font-inter mb-5 text-xl w-full">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="relative flex flex-grow z-10">
            <div className="flex sticky gap-10  justify-center -mb-10">
              <div>
                {" "}
                <img src={BannerImage1} />
              </div>
              <div>
                <img src={BannerImage2} className="relative" />
                {/* <div className=" absolute -z-10 left-[40%] align-middle top-5 ">
                  <ColorBlur
                    height={"h-[10rem]"}
                    width={"w-[10rem]"}
                    color={"bg-yellow-200"}
                  />
                </div> */}
              </div>
              <div>
                <img src={BannerImage3} />
              </div>
            </div>
            {/* color blur at middle pic */}
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="mt-[100px] w-11/12 max-w-maxContent  mx-auto ">
        <div>
          <Quote />
        </div>
      </section>
      <div className=" border-t border-richblack-500 w-full my-20"></div>

      {/* section 3 */}
      <section className="my-20 w-11/12 max-w-maxContent  mx-auto">
        <div className="  flex flex-col gap-20">
          {/* founding story div */}
          <div className="p-5  flex flex-col flex-wrap sm:flex-row  gap-10 md:gap-20  justify-around  items-center sm:flex-wrap  ">
            {/* left div */}
            <div className=" w-full  md:w-[45%] p-5  ">
              <h1 className="font-inter text-3xl text-pink-300 font-bold mb-10">
                Our Founding Story{" "}
              </h1>
              <p className="font-inter text-sm text-richblack-300 mb-3">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.{" "}
              </p>
              <p className="font-inter text-sm   text-richblack-300">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* right div */}
            <div className=" z-10 m-10 shadow-[0px_0px_20px_3px_rgba(246,36,89,1)] ">
              <img src={FoundingStory} />
              {/*  border */}
            </div>
          </div>
          {/* vission and mission div */}
          <div className=" flex flex-wrap flex-row  md:gap-10 justify-between items-center ">
            {/* left div */}
            <div className=" w-full m-10 md:w-[486px] ">
              <h1 className=" font-inter text-3xl text-pink-300 font-bold mb-5">
                Our Vision
              </h1>
              <p className="text-[16px] text-richblack-300 font-inter">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            {/* right div */}
            <div className="w-full m-10 md:w-[486px]  ">
              <h1 className=" font-inter text-3xl text-pink-300 font-bold mb-5">
                Our Mission
              </h1>
              <p className="text-[16px] text-richblack-300 font-inter">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* sectiorn 4 */}
      <Statsomponent />
      {/* section 5 */}
      <LearningGrid />
      {/* section 6 */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AboutSection;
