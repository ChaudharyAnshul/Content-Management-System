import React from "react";
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CourseCard = ({card}) => {
  const {uniName,collegeName,description,id,image} = card;
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={uniName} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {uniName}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {collegeName}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {id}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
