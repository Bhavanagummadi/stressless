import Wrapper from "../assets/wrappers/Navbar";
import { FaBars } from "react-icons/fa";
import Logo from "./logo";
import { useDashBoardContext } from "../pages/DashBoardLayout";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const {toggleSidebar}=useDashBoardContext()
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div>
          <h4 className="logo-text">DashBoard</h4>
        </div>
        <div className="btn-container">
            <ThemeToggle/>
            <LogoutContainer/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;