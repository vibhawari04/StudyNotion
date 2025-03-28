import React from "react";
import Logo from "../../assets/Logo/Logo-Small-Light.png";
import {
  PiFacebookLogo,
  PiYoutubeLogoFill,
  PiGoogleLogoFill,
  PiTwitterLogoFill,
  PiFacebookLogoFill,
} from "react-icons/pi";
import { FooterLink2 } from "../../data/footer-links";

const Footer = () => {
  return (
    <div>
      <div className="bg-richblack-800 p-10 mt-20  text-inter border-t-2 border-t-richblack-700">
        <div className="w-11/12 max-w-maxContent mx-auto ">
          {" "}
          <div className="flex flex-wrap flex-row justify-evenly ">
            {/* left */}
            <div className="flex flex-wrap flex-row gap-10 ml-[50px]">
              {/* part 1 */}
              <div className="flex flex-col gap-3">
                <div className="w-[160px] flex flex-row items-center justify-center  gap-1">
                  <img src={Logo} alt="logo" />
                  <p className="text-xl text-richblack-100 font-bold">
                    StudyNotion
                  </p>
                </div>
                <p className="font-semibold text-richblack-100 ">Company</p>
                <div className="text-richblack-400 mb-2 ">
                  <p>About</p>
                  <p>Careers</p>
                  <p>Affilliates</p>
                </div>
                <div className="flex flex-row gap-3 text-2xl text-richblack-100">
                  <PiFacebookLogoFill />
                  <PiGoogleLogoFill />
                  <PiTwitterLogoFill />
                  <PiYoutubeLogoFill />
                </div>
              </div>

              {/* part 2 */}
              <div className="flex flex-col flex-wrap gap-3">
                <p className="font-semibold text-richblack-100 ">Resources</p>
                <div className="text-richblack-400 mb-3 ">
                  <p>Article</p>
                  <p>Blog</p>
                  <p></p>
                  <p>Chart Sheet</p>
                  <p>Code Challenges</p>
                  <p>Docs</p>
                  <p>Projects</p>
                  <p>videos</p>
                  <p>Workspace</p>
                </div>
                <p className="font-semibold text-richblack-100 ">Support</p>
                <p className="text-richblack-400 mb-2 ">Help Center</p>
              </div>
              {/* part 3 */}
              <div className="flex flex-col">
                <div>
                  <p className="font-semibold text-richblack-100  mb-3">
                    Plans
                  </p>
                  <div className="text-richblack-400 mb-2">
                    <p>Paid memberships</p>
                    <p>For students</p>
                    <p>Business solutions</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-richblack-100 mt-10 mb-3 ">
                    Community
                  </p>
                  <div className="text-richblack-400 mb-2 ">
                    <p>Forums</p>
                    <p>Chapters</p>
                    <p>Events</p>
                  </div>
                </div>
              </div>
              {/*  end of 3rd part */}
            </div>
            {/* vertical len */}
            <div className=" hidden lg:block w-0 border h-auto  border-richblack-700"></div>
            {/* right */}

            {FooterLink2.map((ele) => {
              return (
                <div>
                  <div className="text-richblack-100 font-semibold mb-3">
                    {ele.title}
                  </div>
                  {ele.links.map((val) => {
                    return (
                      <div className="text-richblack-400 ">
                        <a href={val.link}>
                          <p className="mb-2">{val.title}</p>
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })}

            {/* end right */}
          </div>
          {/* horizontal div (line) */}
          <div className="  w-11/12 border m-auto border-richblack-700 mt-10"></div>
          {/* last div */}
          <div className="flex flex-row flex-wrap  justify-center lg:justify-between  w-11/12 px-20 text-richblack-300 mt-5">
            <div className="flex flex-row flex-wrap  gap-3">
              <div className="lg:border-r-2  border-richblack-700 pr-2 ">
                {" "}
                Privacy Policy
              </div>
              <div className="lg:border-r-2 pr-2 border-richblack-700">
                {" "}
                Cookie Policy
              </div>
              <div className="">Terms</div>
            </div>
            <div>
              <p className="text-richblack-300">
                Made with <span className="text-pink-200 text-xl">♥</span>{" "}
                CodeHelp © 2023 Studynotion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
