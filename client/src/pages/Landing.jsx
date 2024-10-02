import React from 'react';
import { Link } from 'react-router-dom';
import main from '../assets/images/main1.svg';
import { Logo } from '../components/index.js';
import Bubble from '../components/Bubble.jsx';
import styled from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            STRESS<span>Less</span> - Feel Your <span>Best</span>
          </h1>
          <h6>Your mental well-being matters. Take the first step today.</h6>
          <p>
            Welcome to StressLess, where your mental well-being is our priority.
            Life can be overwhelming, and it's easy to feel like you're losing
            control. But here at StressLess, we believe that no one should face
            stress or anxiety alone. Our goal is to provide you with the tools,
            resources, and support you need to navigate life’s challenges with
            ease.
          </p>
          <div className="btn-group">
            <Link to="/register" className="btn register-link">
              Get Started
            </Link>
            <Link to="/login" className="btn login-link">
              Login/Try Demo
            </Link>
          </div>
        </div>
        <Bubble />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    padding: 2rem;
    min-height: 100vh;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #333;
  }

  h1 {
    font-size: 3rem;
    color: #ff6584; /* Soft pink */
  }

  h1 span {
    color: #fbbd23; /* Peach color */
  }

  h6 {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #666;
  }

  p {
    font-size: 1.1rem;
    margin: 1.5rem 0;
    color: #555;
    line-height: 1.6;
  }

  .btn-group {
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    border: none;
    font-size: 1rem;
    transition: background 0.3s ease;
  }

  .register-link {
    background-color: #ff6584;
    color: white;
  }

  .login-link {
    background-color: #fbbd23;
    color: white;
  }

  .btn:hover {
    transform: translateY(-3px);
  }

  .image-section {
    display: flex;
    justify-content: center;
  }

  .main-img {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }

    .info {
      text-align: center;
    }

    .btn-group {
      justify-content: center;
    }
  }

  /* Bubble background for added aesthetic */
  body::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 101, 132, 0.5);
    border-radius: 50%;
    top: 10%;
    left: 20%;
    z-index: -1;
  }

  body::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: rgba(251, 189, 35, 0.5);
    border-radius: 50%;
    bottom: 10%;
    right: 20%;
    z-index: -1;
  }
`;

export default Landing;
