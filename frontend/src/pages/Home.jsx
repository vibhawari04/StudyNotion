import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import CTAbutton from "../components/core/Homepage/Button";
import HighLightText from "../components/core/Homepage/HighlightText";
import Banner from "../assets/Images/banner.mp4";
import Codeblocks from "../components/core/Homepage/Codeblocks";
import ColorBlur from "../components/core/Homepage/ColorBlur";
import TimelineSection from "../components/core/Homepage/TimelineSection";
import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection";
import InstructionSection from "../components/core/Homepage/InstructionSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/Homepage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div className=" ">
      {/*  section 1 */}
      <div className=" relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent mb-[-5rem]">
        <Link to={"/signup"}>
          <div className=" mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit  ">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <BiRightArrowAlt />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future With <HighLightText text={"Coding Skills"} />
        </div>
        <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-200">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row gap-7 mt-8">
          <CTAbutton active={true} linkto={"/signup"}>
            Learn More
          </CTAbutton>
          <CTAbutton active={false} linkto={"/login"}>
            Book a Demo
          </CTAbutton>
        </div>

        <div className="relative w-[1035px] h-[515px] mx-3 my-5 ">
          <div className="relative left-[15%] z-0 top-10 ">
            <ColorBlur
              height={"h-[10rem]"}
              width={"w-[45rem]"}
              color={"bg-blue-200"}
            />
          </div>
          {/* <div className="mx-[10%] absolute flex  xm:w-[45%] md:w-[75%] lg:-w-full my-12 z-1  top-2 shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]  ">
            <video muted loop autoPlay>
              {" "}
              <source src={Banner} type="video/mp4" />
            </video>
          </div> */}

          <div className="absolute flex flex-col  w-full items-center sm:w-3/4 lg:w-full my-12 z-1 top-2 shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
            <div className="mx-auto ">
              <video muted loop autoPlay className="w-full ">
                <source src={Banner} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* code section 2 */}
        <div className="my-[8rem] flex flex-col ">
          <Codeblocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighLightText text={"coding potential "} />
                with our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
            <html lang="en">
            <head>
            <title>HTML 5 Boilerplate</title>
            <link rel="stylesheet" href="style.css">
            </head>
            <body>
	          <script src="index.js"></script>
            </body>
            </html>`}
            codeColor={"text-yellow-25"}
          />
          {/* ******************************************************************* */}
          <Codeblocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighLightText text={"coding potential "} />
                with our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
            <html lang="en">
            <head>
            <title>HTML 5 Boilerplate</title>
            <link rel="stylesheet" href="style.css">
            </head>
            <body>
	          <script src="index.js"></script>
            </body>
            </html>`}
            codeColor={"text-yellow-25"}
          />
          {/* ******************************************************************* */}
        </div>

        {/*  expore more */}
        <ExploreMore />
      </div>

      {/* section 2 */}
      <div className="bg-pure-greys-5    text-richblack-700 relative">
        <div className="homepage_bg h-[333px] relative z-0">
          <div className="w-11/12 max-w-maxContent flex items-center gap-5 mx-auto ">
            <div className="flex flex-row text-white gap-4  mx-auto my-[10rem]">
              <CTAbutton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <BiRightArrowAlt className="text-xl" />
                </div>
              </CTAbutton>
              <CTAbutton active={false} linkto={"/login"}>
                <div className="flex items-center gap-2">Learn More</div>
              </CTAbutton>
            </div>
          </div>
        </div>
        <div className="  w-11/12 max-w-maxContent flex flex-col  justify-between gap-5 mx-auto ">
          <div className="flex  flex-col sm:flex-row mx-auto sm:w-11/12 max-w-maxContent  gap-[2rem] sm:gap-[8rem]  my-20">
            <div className="font-inter font-bold text-3xl  text-richblack-900">
              Get the skills you need for a{" "}
              <HighLightText text={"job that is in demand."} />
            </div>
            <div className=" flex flex-col gap-[2rem]  ">
              <p className="font-inter  font-semibold text-xl text-rickblack-700">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>

              <div className="w-fit">
                <CTAbutton active={true} linkto={"/login"}>
                  Learn More
                </CTAbutton>
              </div>
            </div>
          </div>
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/*  section 3 */}
      <div className="  w-11/12 max-w-maxContent  mx-auto bg-richblack-900 first-letter: text-white">
        <InstructionSection />
      </div>
      <div className="w-11/12 max-w-maxContent  mx-auto   border-white   z-0 mt-20 ">
        {/*  slider */}
        <h1 className="text-center  w-11/12 z-10  text-4xl text-richblack-5  font-semibold mt-8">
          Reviews from other learners
        </h1>

        <ReviewSlider />
      </div>
      {/*  section footer */}
      <Footer />
    </div>
  );
};

export default Home;

// home work
// section 2
