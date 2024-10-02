import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the bubble to expand and shrink from the center using scale
const expandAnimation = keyframes`
  0% {
    transform: scale(1); /* Initial size */
    border-radius: 60% 40% 50% 70%;
  }
  50% {
    transform: scale(1.5); /* Grow the bubble by 1.5 times */
    border-radius: 50% 60% 70% 40%; /* Slightly change shape to give a natural feel */
  }
  100% {
    transform: scale(1); /* Shrink back to original size */
    border-radius: 60% 40% 50% 70%;
  }
`;

// Styled container for the app
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height for centering */
  /* background-color: #f0f4f8; Light background color for contrast */
`;

// Bubble animation that loops indefinitely
const Bubbles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #f8bbd0; /* Soft pink */
  border-radius: 60% 40% 50% 70%; /* Uneven bubble shape */
  animation: ${expandAnimation} 8s ease-in-out infinite; /* Slower animation */
`;

// Text inside the bubble
const BubbleText = styled.p`
  font-size: 24px;
  color: #e57373; /* Soft red color */
  font-family: "Arial", sans-serif;
  transition: opacity 0.5s ease;
  opacity: 0.8;
`;

const Bubble = () => {
  const [isBreathingIn, setIsBreathingIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between breathing in and out based on time
      setIsBreathingIn((prev) => !prev);
    }, 4000); // 4 seconds for each state
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Container>
      <Bubbles>
        <BubbleText>{isBreathingIn ? "Breathe in" : "Breathe out"}</BubbleText>
      </Bubbles>
    </Container>
  );
};

export default Bubble;
