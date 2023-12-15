import React, { useState, useEffect } from "react";

import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { getQuiz } from "../../request/quizRequest";
import { useParams } from 'react-router-dom';
import { retrieveDataFromLocalStorage } from "../../util/cache";


const Grades = () => {
  const [quizList, setQuizList] = React.useState();
  const [isProfessor, setisProfessor] = React.useState(false);
  const auth1 = retrieveDataFromLocalStorage("UserAuth");
  let { id } = useParams();

  useEffect(() => {
    const auth = retrieveDataFromLocalStorage("UserAuth");
    if (auth.userRole === "PROFESSOR"){
      setisProfessor(true);
    }
    const fetchData = async () => {
      const a = await getQuiz({'courseNumber':id});
      console.log(a);
      setQuizList(a);
    };
    fetchData();
  }, []);

  const checkButton = (quiz) =>{
    let isScored = "Not Scored"
    quiz.quizScores.map((score) =>{
      console.log(quiz.id.timestamp)
      console.log(score)
      if (score.student.email === auth1.email){
        console.log(2)
        const len = quiz.quizQuestions.length * 5;
        isScored = '' + score.score + " / " + len;
      }
    });
    return isScored;
  };

  if(quizList !== undefined){
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Quiz</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quizList.map((quiz) => (
            <TableRow key={quiz.id.timestamp}>
              <TableCell>{quiz.quizName}</TableCell>
              <TableCell>{ checkButton(quiz) }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
};

export default Grades;
