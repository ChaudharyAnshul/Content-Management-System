import { Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import React, { useState, useEffect } from "react";
import { IconButton, TextField, Modal, Box, Typography } from "@mui/material";
import QuizForm from "./Quiz_Form";

const QuizTable = ({ quizList }) => {

  const [questions, setQuestions] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonClick = (quizQuestions) =>{
    setQuestions(quizQuestions);
    setIsModalOpen(true);
    console.log(quizQuestions);
  } 

  const closeModal = () => {
    setIsModalOpen(false);
    setQuestions(null);
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  return (
    <div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Quiz</TableCell>
          <TableCell>Is Available</TableCell>
          <TableCell>Due Date</TableCell>
          <TableCell>Take Quiz</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {quizList.map((quiz) => (
          <TableRow key={quiz.id}>
            <TableCell>{quiz.quizName}</TableCell>
            <TableCell>{quiz.isActive? 'Yes':"No"}</TableCell>
            <TableCell>No Due Date</TableCell>
            <button onClick={()=> buttonClick(quiz.quizQuestions)}>Start Quiz</button>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Quiz
            </Typography>

            <QuizForm quizData ={questions}></QuizForm>


        </Box>
    </Modal>
    </div>

  );
};

export default QuizTable;
