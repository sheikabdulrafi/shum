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
          all utilities, from energy and water usage to heating and cooling. By
          optimizing efficiency and reducing waste, you not only save on costs
          but also contribute to a more sustainable future. Experience the
          convenience and peace of mind that comes with managing your home
          intelligently.
        </h3>
      </div>
      <div className="form">
        <AuthPage />
      </div>
    </section>
  );
};

export default Dashboard;
