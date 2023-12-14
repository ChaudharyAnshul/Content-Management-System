import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CourseCard = ({ card }) => {
  const id = card.number;
  console.log(1);
  console.log(card);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Northeastern Uni
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          COE
        </Typography>
        <Link to={`/course/${id}`}>
          <Typography gutterBottom variant="body2" component="div">
          {card.name}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {card.number}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
