import { useDashBoardContext } from "../pages/DashBoardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({isBigSidebar}) => {
    const {user,toggleSidebar}=useDashBoardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            className="nav-link"
            key={text}
            to={path}
            onClick={isBigSidebar?null:toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
