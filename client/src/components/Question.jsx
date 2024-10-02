import React, { useState } from "react";
import styled from "styled-components"; 
import PropTypes from "prop-types";
import Breathe from "../pages/Emotion";

// Styled card component using styled-components
const CardContainer = styled.div`
  border: 1px solid #f0c2d1; /* Light pink border */
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background-color: #ffeef2; /* Light peach background */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const QuestionText = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${({ selected }) => (selected ? '#d46a8d' : '#333')}; /* Change color when selected */
`;

const OptionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OptionItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
  padding: 10px;
  border: 1px solid #f0c2d1; /* Light pink border for options */
  border-radius: 5px;
  background-color: ${({ selected }) => (selected ? '#f7d1e5' : '#fff')}; /* Light pink when selected */
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #f7d1e5; /* Light pink hover */
    border-color: #d46a8d; /* Darker pink on hover */
  }
`;

// Card component to display a question and its options
const Card = ({ question, options, selectedOption, onOptionSelect }) => {
  return (
    <CardContainer>
      <QuestionText selected={selectedOption !== null}>{question}</QuestionText>
      <OptionList>
        {Object.entries(options).map(([key, option]) => (
          <OptionItem
            key={key}
            selected={selectedOption === key}
            onClick={() => onOptionSelect(key)}
          >
            {option}
          </OptionItem>
        ))}
      </OptionList>
    </CardContainer>
  );
};

// PropTypes validation for Card
Card.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string,
  onOptionSelect: PropTypes.func.isRequired,
};

// Parent component to loop through the data and display multiple cards
const QuestionsList = ({ data, selectedAnswers, onOptionSelect }) => {
  return (
    <div>
      {Object.entries(data).map(([question, options], index) => (
        <Card 
          key={index} 
          question={question} 
          options={options} 
          selectedOption={selectedAnswers[index]} 
          onOptionSelect={(optionKey) => onOptionSelect(index, optionKey)} 
        />
      ))}
    </div>
  );
};

// PropTypes validation for QuestionsList
QuestionsList.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.string) // Options as object of strings
  ).isRequired,
  selectedAnswers: PropTypes.array.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
};

// Sample data
const questionData = {
  "1. How do you generally feel about your day when you wake up?": {
    5: "Full of energy and excitement",
    4: "Motivated, but a little tired",
    3: "Neutral, just another day",
    2: "A bit anxious or stressed",
    1: "Dreading the day ahead",
  },
  "2. How often do you feel like you have enough time to do everything you want?": {
    5: "Almost always",
    4: "Often, but with some struggle",
    3: "Sometimes, I have to rush",
    2: "Rarely, I’m often overwhelmed",
    1: "Never, I always feel like I’m running out of time",
  },
  "3. When faced with a problem, how confident do you feel in solving it?": {
    5: "Very confident, I love problem-solving",
    4: "Confident, but sometimes need help",
    3: "Neutral, I get by",
    2: "A bit unsure, I often second-guess myself",
    1: "Not confident at all, I feel lost",
  },
  "4. How do you feel about your social life and connections with friends?": {
    5: "Very connected, I have a strong support network",
    4: "Connected, but I wish I could see them more often",
    3: "Neutral, I see friends sometimes",
    2: "A little disconnected, I wish I had more social interactions",
    1: "Very isolated, I rarely talk to others",
  },
  "5. How do you cope when things don’t go according to plan?": {
    5: "I adapt quickly and move on",
    4: "I get frustrated but try to fix it",
    3: "I feel stressed but can manage",
    2: "I struggle and often feel anxious",
    1: "I get overwhelmed and shut down",
  },
  "6. How would you describe your current stress level?": {
    5: "I feel calm and stress-free",
    4: "I have mild stress but can handle it",
    3: "I feel stressed but can usually manage",
    2: "I’m very stressed and find it hard to cope",
    1: "I’m overwhelmed by stress constantly",
  },
  "7. How often do you take time for yourself to relax and recharge?": {
    5: "Every day, I prioritize self-care",
    4: "Often, I make time when I can",
    3: "Sometimes, but I need more time for myself",
    2: "Rarely, I struggle to find time",
    1: "Never, I’m always busy",
  },
  "8. When you think about your future, how do you feel?": {
    5: "Very optimistic, I’m excited about it",
    4: "Fairly optimistic, I look forward to it",
    3: "Neutral, I don’t think about it much",
    2: "A bit worried, I’m unsure what will happen",
    1: "Very worried, I feel uncertain and anxious",
  },
  "9. How would you describe your sleep quality over the past week?": {
    5: "Excellent, I sleep soundly every night",
    4: "Good, I sleep well most nights",
    3: "Average, some nights are better than others",
    2: "Poor, I often wake up feeling tired",
    1: "Terrible, I have trouble falling or staying asleep",
  },
  "10. How do you usually feel when you’re with your family?": {
    5: "Very happy and supported",
    4: "Supported, but sometimes stressed",
    3: "Neutral, it’s a mix of emotions",
    2: "A bit distant, I don’t feel fully connected",
    1: "Tense or anxious, I often feel uncomfortable",
  }
};

// Main app component
const Question = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));
  const [averageScore, setAverageScore] = useState(null);
  const [resultMessage, setResultMessage] = useState("");

  const handleOptionSelect = (index, optionKey) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = optionKey; // Store the optionKey directly (string)
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // Calculate total score
    const totalScore = selectedAnswers.reduce((acc, answer) => {
      return acc + (parseInt(answer) || 0); // Handle null values
    }, 0);
    
    // Calculate average score
    const answeredCount = selectedAnswers.filter(answer => answer !== null).length;
    const average = answeredCount > 0 ? (totalScore / answeredCount).toFixed(2) : 0; // Prevent division by zero

    setAverageScore(average);
    
    // Set result message based on average score (higher score means better result)
    if (average >= 4.5) {
      setResultMessage("You are doing exceptionally well! Keep it up!");
    } else if (average >= 3.0) {
      setResultMessage("You are in a good place but can enhance your well-being.");
    } else {
      setResultMessage("You might be facing some challenges. Consider reaching out for support.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Self-Assessment Questionnaire</h1>
      <QuestionsList 
        data={questionData} 
        selectedAnswers={selectedAnswers} 
        onOptionSelect={handleOptionSelect} 
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button 
          onClick={handleSubmit} 
          style={{
            backgroundColor: "#d46a8d", 
            color: "#fff", 
            border: "none", 
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem" 
          }}
        >
          Submit
        </button>
      </div>
      {averageScore && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h3>Your Results:</h3>
          <p>Average Score: {averageScore}</p>
          <p>{resultMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
