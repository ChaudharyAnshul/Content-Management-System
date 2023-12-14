import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import AssignmentsTable from "./AssignmentTable";


const Assignment = () => {
  const assignmentsArr = [
    {
      id: 1,
      assignment: "Multithreading Assignment",
      availableUntil: "2023-12-17",
      dueDate: "2023-12-20",
      points: 10,
    },
    {
      id: 2,
      assignment: "Swing Application",
      availableUntil: "2023-12-19",
      dueDate: "2023-12-23",
      points: 20,
    },
    {
      id: 2,
      assignment: "Factory and Singleton",
      availableUntil: "2023-12-19",
      dueDate: "2023-12-23",
      points: 20,
    },
    {
      id: 2,
      assignment: "Design Patterns Assignment",
      availableUntil: "2023-12-19",
      dueDate: "2023-12-23",
      points: 20,
    },
    {
      id: 2,
      assignment: "Comparator Assignment",
      availableUntil: "2023-12-19",
      dueDate: "2023-12-23",
      points: 20,
    },
    {
      id: 2,
      assignment: "csv file assignment",
      availableUntil: "2023-12-19",
      dueDate: "2023-12-23",
      points: 20,
    },
    // ...
  ];
  const [assignments, setAssignments] = useState(assignmentsArr);

  const [searchTerm, setSearchTerm] = useState("");



  return (
      <div>
        <h1>Assignments</h1>
        <TextField
          id="search-bar"
          label="Search for an assignment..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AssignmentsTable assignments={assignments} searchTerm={searchTerm} />
      </div>
    );
};

export default Assignment;
