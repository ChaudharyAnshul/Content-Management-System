import React, { useContext } from "react";
import CustomDrawer from "../../components/CustomDrawer";
import { CourseHome } from "../../components/Course/CourseHome";
import CourseContext, { CoursePovider } from "../../context/CourseProvider";
import CourseAnnouncement from "../../components/Course/CourseAnnouncement";
import Grades from "../Grades/Grades";
import Assignment from "../../components/Assignment";
import Quiz_home from "../../components/Quiz_home";


export const CourseDetails = () => {
  const {courseDisplay} = useContext(CourseContext);
  console.log(courseDisplay);
  return (
    <div style={{ display: "flex" }}>
      <CustomDrawer content="Drawer Content 1" />
      <div style={{ marginLeft: "200px", padding: "20px" , width: "100%"}}>
        {courseDisplay === "HOME" ? (<CourseHome />): courseDisplay === "ANNOUNCEMENT" ? (<CourseAnnouncement/>) : courseDisplay === "GRADES" ? (<Grades/>) : courseDisplay === "ASSIGNMENTS" ? <Assignment/> : courseDisplay === "QUIZZES" ? <Quiz_home/> : ""}
      </div>
    </div>
  );
};
