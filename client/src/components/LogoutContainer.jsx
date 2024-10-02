import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashBoardContext } from "../pages/DashBoardLayout";
import { FaUserCircle,FaCaretDown } from "react-icons/fa";

const LogoutContainer = () => {
    const [showLogout,setShowLogout]=useState(false);
    const {user,logoutUser}=useDashBoardContext();
  return (
    <Wrapper>
        <button type="button" className="btn logout-btn" onClick={()=>setShowLogout(!showLogout)}>
            <FaUserCircle/> 
            {user?.name}
            <FaCaretDown/>
        </button>
        <div className={showLogout?"dropdown show-dropdown":"dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
                Log Out
            </button>
        </div>
    </Wrapper>
  )
}

export default LogoutContainer;
