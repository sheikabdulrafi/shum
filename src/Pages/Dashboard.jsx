import React from "react";
import SideBar from "../Components/SideBar";
import Home from "../Components/Home";

const Dashboard = ({ selected }) => {
  return (
    <>
      <SideBar />
      <section>
        {selected === "home" ? <Home /> : <h1>Nothing Selected</h1>}
      </section>
    </>
  );
};

export default Dashboard;
