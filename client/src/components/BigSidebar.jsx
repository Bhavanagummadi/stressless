import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from "./logo";
import { useDashBoardContext } from "../pages/DashBoardLayout";

const BigSidebar = () => {
  const { showSidebar } = useDashBoardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar "
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
