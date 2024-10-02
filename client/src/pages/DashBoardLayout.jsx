import { Outlet, useLocation } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";
import Chatbot from "./Chatbot"; // Import Chatbot component

const DashboardContext = createContext();

const DashBoardLayout = ({ isDarkEnabled }) => {
  const user = { name: "Badari" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("LogOut");
  };

  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <BigSidebar />
          <SmallSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
              {/* Render Chatbot only for dashboard routes */}
              {isDashboardRoute && <Chatbot />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashBoardContext = () => {
  return useContext(DashboardContext);
};

export default DashBoardLayout;
