import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SuperDenseTable(props) {
  const { rows = [], headers = [] } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headers &&
              headers.map((header, index) => (
                <TableCell key={index} align={"left"}>
                  <h3>{header.title}</h3>
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {headers.map((h, index) => (
                  <TableCell key={index} align={"left"}>
                    {h.render ? h.render(row) : row[h.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                minHeight: "100px",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Aun no hay Tipos de activo regitrados
            </div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
