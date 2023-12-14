import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function CourseAnnouncement() {
  const announcements = [
    {
      id: 1,
      title: "CSYE6200 Quiz 1",
      dueDate: "09/12/2023",
    },
    {
      id: 2,
      title: "CSYE6200 Quiz 2",
      dueDate: "09/15/2023",
    },
    {
      id: 3,
      title: "CSYE6200 Quiz 3",
      dueDate: "10/01/2023",
    },
    {
      id: 4,
      title: "CSYE6200 Quiz 4",
      dueDate: "10/15/2023",
    },
    {
      id: 5,
      title: "CSYE6200 Quiz 5",
      dueDate: "11/01/2023",
    },
  ];
  return (
    <>
      <List>
        {announcements.map((announcement) => (
          <>
            <Stack key={announcement.id} direction="row" alignItems="center" spacing={2}>
              <div  style={{ width:"100%"}}>
                <Typography   variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  JG Reminder to submit the Quizzes for today
                </Typography>
                <ListItem>
                  <ListItemText
                    primary={announcement.title}
                    secondary={announcement.dueDate}
                  />
                </ListItem>
              </div>

              <Divider orientation="vertical" flexItem />
              <Typography variant="body2" component="div">
              {announcement.dueDate}
              </Typography>
            </Stack>
            <hr />
          </>
        ))}
      </List>
    </>
  );
}

export default CourseAnnouncement;
