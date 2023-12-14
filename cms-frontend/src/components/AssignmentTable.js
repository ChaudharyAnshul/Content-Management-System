import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const AssignmentsTable = ({ assignments, searchTerm }) => {
  const filteredAssignments = assignments.filter((assignment) => {
    return assignment.assignment.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Assignment</TableCell>
          <TableCell>Available Until</TableCell>
          <TableCell>Due Date</TableCell>
          <TableCell>Points</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredAssignments.map((assignment) => (
          <TableRow key={assignment.id}>
            <TableCell>{assignment.assignment}</TableCell>
            <TableCell>{assignment.availableUntil}</TableCell>
            <TableCell>{assignment.dueDate}</TableCell>
            <TableCell>{assignment.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssignmentsTable;
