import LineChart from "../Components/LineChart";

const itemsData = {
  Television: "",
  Lights: "",
  "Air Conditioner": "",
  fans: "",
  Refrigerator: "",
  "Washing Machine": "",
  "Microwave Oven": "",
  Blender: "",
  "Stove Top": "",
  "Garbage Disposal": "",
  "Security System": "",
};

const Home = () => {
  return (
    <section className="HomeSection">
      <h1>Dashboard</h1>
      <div className="items">
        {Object.keys(itemsData).map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </div>
      <div className="graph">
        <LineChart />
      </div>
    </section>
  );
};

export default Home;
