import styled from "styled-components";
import logo from "../assets/images/image2.svg";

const LogoWrapper = styled.div`
  display: flex;
  align-items:center;
`;

const LogoImage = styled.img`
  width: 120px; /* Adjust logo size as needed */
  height: auto;
  margin-right: 10px; /* Adds space between the logo and text */
  margin-left: 20px;
`;


const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={logo} alt="Jobify Logo" className="logo" />
    </LogoWrapper>
  );
};

export default Logo;
