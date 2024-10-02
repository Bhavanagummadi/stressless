import styled, { keyframes } from "styled-components";

// Keyframe animations for smooth transitions
const expandAnimation = keyframes`
  from {
    width: 200px;
    height: 200px;
    border-radius: 60% 40% 50% 70%;
  }
  to {
    width: 300px;
    height: 300px;
    border-radius: 50% 60% 70% 40%;
  }
`;

const shrinkAnimation = keyframes`
  from {
    width: 300px;
    height: 300px;
    border-radius: 50% 60% 70% 40%;
  }
  to {
    width: 200px;
    height: 200px;
    border-radius: 60% 40% 50% 70%;
  }
`;

// Styled container for the app
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d1c4e9; /* Soft purple background */
`;

// Styled bubble with conditional animation
const Bubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #f8bbd0; /* Soft pink */
  border-radius: 60% 40% 50% 70%; /* Uneven bubble shape */
  animation: ${(props) =>
      props.isBreathingIn ? expandAnimation : shrinkAnimation}
    2s ease-in-out;
  transition: all 2s ease-in-out;
`;

// Text inside the bubble
const BubbleText = styled.p`
  font-size: 24px;
  color: #e57373; /* Soft red color */
  font-family: "Arial", sans-serif;
  transition: opacity 0.5s ease;
  opacity: 0.8;
`;
