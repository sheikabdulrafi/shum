import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaChartBar } from "react-icons/fa";
import { BiSolidNetworkChart } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { SiKasasmart } from "react-icons/si";

const SideBar = () => {
  return (
    <nav>
      <h3>
        <SiKasasmart />
        SHUM
      </h3>
      <ul>
        <li>
          <Link to={"/home"}>
            <ImHome /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            <FaChartBar /> <span>Analysis</span>
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            <BiSolidNetworkChart /> <span>Prediction</span>
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            <LuUser /> <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            <PiProjectorScreenChartFill /> <span>About</span>
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            <RiTeamFill /> <span>Team</span>
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            <CgLogOut /> <span>Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
