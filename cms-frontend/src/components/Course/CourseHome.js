import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { courses } from "../../json/courseHome";
console.log(courses)
export const CourseHome = () => {
  return (
    <Box>
      <h2>{courses[0].title}</h2>
      <List>
        {courses.map((course) => (
          <ListItem key={course.id}>
            <ListItemAvatar>
              <Avatar alt={course.title} src={course.avatarUrl} />
            </ListItemAvatar>
            <ListItemText primary={course.title} secondary={course.date} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
