import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import QuizTable from "./Quiz_Table";
import QuizForm from "./Quiz_Form";
import { getQuiz } from "../request/quizRequest";
import { createQuizRequest } from '../request/quizRequest';
import { retrieveDataFromLocalStorage } from '../util/cache';
import { useParams } from 'react-router-dom';

const style2 = {
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


const Quiz_home = () => {


  const [quizList, setQuizList] = React.useState();
  const [open2, setOpen2] = React.useState(false);
  const [isProfessor, setisProfessor] = React.useState(false);

  let { id } = useParams();

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

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

  useEffect(() => {
    const auth = retrieveDataFromLocalStorage("UserAuth");
    if (auth.userRole === "PROFESSOR"){
      setisProfessor(true);
    }
    const fetchData = async () => {
      const a = await getQuiz({'courseNumber':id});
      setQuizList(a);
    };
    fetchData();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  if(quizList !== undefined){
  return (
    <div>
        <h1>Quiz</h1>
        {isProfessor && (
          <Button onClick={handleOpen2}>Open modal</Button>
        )}
        <QuizTable quizList={quizList}/>
        <TransitionsModal open={open2} handleClose={handleClose2}/>
      </div>
    );
  }
};


function TransitionsModal({open, handleClose}) {

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const quizJson =  data.get('QuizJson');
    const jsonObject = JSON.parse(quizJson);
    console.log(jsonObject)
    const submitSuccess = createQuizRequest(jsonObject);

    submitSuccess.then((res)=>{
      if (res){
        handleClose();
      } else{
        console.log("Failed to create!");
      }
    }).catch(err=>{
      console.log(err);
    })
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        >
        <Fade in={open}>
          <Box sx={style2}>
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="QuizJson"
                label="QuizJson"
                name="QuizJson"
                autoComplete="Quizjson"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Quiz_home;