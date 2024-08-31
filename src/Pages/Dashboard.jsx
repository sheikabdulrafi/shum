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
          Konthamandi panikimalina vallu chesey paniki raani project. Pani
          chestado ledo kooda teliyadu. if else lo rasey code ki AI model
          chesaru... adikooda nibba lagaey output isthundi... #AreyEntraIdhi
        </h3>
      </div>
      <div className="form">
        <AuthPage />
      </div>
    </section>
  );
};

export default Dashboard;
