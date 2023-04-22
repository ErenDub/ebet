import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

export const GlobalTablle = ({
  head,
  body,
}: {
  head: { label: string; id: string }[];
  body: React.ReactNode;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map((headItem) => (
              <TableCell key={headItem.id}>{headItem.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </TableContainer>
  );
};
