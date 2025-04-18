import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, matchPath } from "react-router-dom";
import { resetCourseState } from "../../../slices/courseSlice";

const SidebarLink = ({ link, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <NavLink
      to={link.path}
      onClick={() => dispatch(resetCourseState())}
      className={` relative px-8 py-2 text-sm font-medium ${
        matchRoute(link.path)
          ? "bg-yellow-800 text-yellow-50 border-l-2 border-l-pink-200"
          : "bg-opacity-0 text-richblack-300"
      }transition-all duration-200`}
    >
      {/* <span
        className={`absolute left-0 top-0 h-full w-[0.2rem]  ${
          matchRoute(link.path) ? "opacity-100" : "opactity-0 "
        }`}
      ></span> */}
      <div className="flex item-center gap-x-2">
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </div>
    </NavLink>
  );
};

export default SidebarLink;
