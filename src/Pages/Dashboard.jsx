import React from "react";
import AuthPage from "../Components/Auth";
import bgimage from "../assets/bgimage.png";

const Dashboard = ({ selected }) => {
  return (
    <section className="Authentication">
      <img src={bgimage} className="bgImage" />
      <div>
        <h1 className="titleData">Smart Home Utility Management</h1>
        <h3>
          Smart Home Utility Management is designed to revolutionize the way you
          interact with your home. Our system seamlessly integrates with your
          existing infrastructure to provide real-time monitoring and control of
          all utilities, from energy and water usage to heating and cooling.
        </h3>
      </div>
      <div className="form">
        <AuthPage />
      </div>
    </section>
  );
};

export default Dashboard;
