import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  // min-h-[calc(100vh-3.5rem)]
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);
  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }
  return (
    <div className="relative flex ">
      <Sidebar />
      <div className="  w-[1000px] mx-auto">
        <div className=" mx-auto w-11/12  py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
