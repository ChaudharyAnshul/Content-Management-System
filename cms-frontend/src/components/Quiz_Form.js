import React, { useState } from "react";
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import "./quiz_Home.css";
import { useNavigate } from 'react-router-dom';

import { AnswersSubmit } from "../request/answersSubmit";


const QuizForm = ({ quizData }) => {
  const [answers, setAnswers] = useState({});

  const handleInputChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const navigate = useNavigate();
    const data = new FormData(e.currentTarget);
    const answers = data
    
    const loginSuccess = AnswersSubmit(answers);

    loginSuccess.then((res)=>{
        
        // navigate('/dashboard');
        // <Navigate to="/dashboard" state={{from:location}} replace/>
      }).catch(err=>{
        console.log(err);
      })

    console.log("Submitted answers:", answers);
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
                        id={question.id}
                        label="Answer"
                        />
            
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </Box>
    </div>
  );
};

export default QuizForm;
