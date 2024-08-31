import "./Styles/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import SideBar from "./Components/SideBar";

const App = () => {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
export default App;
