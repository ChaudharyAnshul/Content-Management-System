import React, { useState, useEffect } from "react";

import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";


const Grades = () => {

const gradesArr = [
  {
    id: 1,
    course: "Assignement 1",
    arrangeBy: "Alphabetical",
    dueDate: "2023-12-15",
    apply: "Yes",
  },
  {
    id: 2,
    course: "Assignement 2",
    arrangeBy: "Due Date",
    dueDate: "2023-12-20",
    apply: "No",
  },
  {
    id: 3,
    course: "Assignement 3",
    arrangeBy: "Due Date",
    dueDate: "2023-12-20",
    apply: "No",
  },
  
  {
    id: 4,
    course: "lab 1",
    arrangeBy: "Due Date",
    dueDate: "2023-12-20",
    apply: "No",
  },
  
  {
    id: 5,
    course: "Assignement 4",
    arrangeBy: "Due Date",
    dueDate: "2023-12-20",
    apply: "No",
  },
  
];
  const [grades, setGrades] = useState(gradesArr);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Course</TableCell>
          <TableCell>Arrange By</TableCell>
          <TableCell>Due Date</TableCell>
          <TableCell>Apply</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {grades.map((grade) => (
          <TableRow key={grade.id}>
            <TableCell>{grade.course}</TableCell>
            <TableCell>{grade.arrangeBy}</TableCell>
            <TableCell>{grade.dueDate}</TableCell>
            <TableCell>{grade.apply}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Grades;
