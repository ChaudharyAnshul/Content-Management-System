import React, { useState } from "react";
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import "./quiz_Home.css";
import { useNavigate } from 'react-router-dom';
import { retrieveDataFromLocalStorage } from '../util/cache';
import { AnswersSubmit } from "../request/answersSubmit";


const QuizForm = ({quizData, id, onClose}) => {

  const [score, setScore] = useState(0);
  const auth = retrieveDataFromLocalStorage("UserAuth");

  const handleInputChange = (question, event) => {
    if (event.target.value == question.correctAnswer){
      setScore(score + 5);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      score: score,
      id:id,
      email: auth.email
    }
    const loginSuccess = await AnswersSubmit(data);
    onClose();
  };

  return (
    <div>
      <Box component='form' onSubmit={handleSubmit}>
    
        {quizData.map((question) => (
          <div>
            <div>{question.question}
            <br />
            Options:
            <br />
            {question.quizOptions.join(" || ")}
            </div>
            <TextField
                        margin="normal"
                        required
                        id={question.id.timestamp}
                        label="Answer"
                        onChange={ (event) => handleInputChange(question, event)}
                        />
            
          </div>
        ))}
        <button type="submit" >Submit Quiz</button>
      </Box>
    </div>
  );
};

export default QuizForm;
