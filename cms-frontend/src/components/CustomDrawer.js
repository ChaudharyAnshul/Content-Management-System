// CustomDrawer.js
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import React, { useContext } from 'react';
import { courseDrawerData } from "../json/courseDrawer";
import CourseContext from '../context/CourseProvider';


const CustomDrawer = () => {
  const {courseDisplay,setCourseDisplay} = useContext(CourseContext);
  function changeDisplay(drawerText){
    
    setCourseDisplay(drawerText.toUpperCase())
  }
  console.log(courseDisplay);
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {courseDrawerData.map((drawerText, index) => (
          <ListItem key={index} style={{cursor:"pointer"}}>
            <ListItemText onClick={()=>{changeDisplay(drawerText)}} primary={drawerText} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
