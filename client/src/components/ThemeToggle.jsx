import Wrapper from "../assets/wrappers/ThemeToggle";
import { BsFillSunFill,BsFillMoonFill } from "react-icons/bs";
import { useDashBoardContext } from "../pages/DashBoardLayout";

const ThemeToggle = () => {
    const {isDarkTheme,toggleDarkTheme}=useDashBoardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
        {isDarkTheme?<BsFillSunFill/>:<BsFillMoonFill/>}
    </Wrapper>
  )
}

export default ThemeToggle
