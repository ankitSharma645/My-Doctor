import React, { useState } from 'react';
import styled from 'styled-components';
import Chatbot from './Chatbot'; // Import the Chatbot component
import { FiMessageCircle } from 'react-icons/fi';

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ChatbotToggleStyled>
      <button className="toggle-button" onClick={toggleChatbot}>
        <FiMessageCircle size={30} />
      </button>
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot />
        </div>
      )}
    </ChatbotToggleStyled>
  );
};

const ChatbotToggleStyled = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

  .toggle-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .toggle-button:hover {
    background-color: #0056b3;
  }

  .chatbot-container {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 400px;
    max-width: 90%;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
`;

export default ChatbotToggle;
