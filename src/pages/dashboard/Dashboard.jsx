import React, { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { DisplayContent } from "../../components/displayContent/DisplayContent";
import { getData } from "../../features/data/helpers/getData";
import { useDispatch } from "react-redux";

export const Dashboard = () => {
  const dispatch= useDispatch()
  
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <DisplayContent />
      </div>
    </div>
  );
};
