/*import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/chatbot/chat', { question });
      setResponse(res.data.answer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChatbotStyled>
      <h3>Apka Apna Doctor 🩺🧑‍⚕️</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="Type Your disease Here"
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>{response}</p>}
    </ChatbotStyled>
  );
};

const ChatbotStyled = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  max-width: 400px;
  margin: 20px auto;
  background: #fff;

  h3 {
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 5px;
    margin-bottom: 10px;
  }

  button {
    padding: 5px;
  }

  p {
    background: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
  }
;`
export default Chatbot;


*/
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/chatbot/chat', { question });
      setResponse(res.data.answer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChatbotStyled>
      <h3>Apka Apna Doctor 🩺🧑‍⚕️</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="Type Your disease Here"
        />
        <button type="submit">Send</button>
      </form>
      {response && (
        <ResponseStyled>
          <p>{response}</p>
        </ResponseStyled>
      )}
    </ChatbotStyled>
  );
};

const ChatbotStyled = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 50px auto;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 20px;
    font-size: 2rem;
    text-align: center;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    padding: 10px;
    width: 80%;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;
  }

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ResponseStyled = styled.div`
  background: #e0f7fa;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 1.2rem;
  text-align: center;
  color: #00796b;
  border: 1px solid #00796b;

  p {
    margin: 0;
    padding: 10px;
    background: #b2dfdb;
    border-radius: 5px;
    border: 1px solid #004d40;
  }
`;

export default Chatbot;
