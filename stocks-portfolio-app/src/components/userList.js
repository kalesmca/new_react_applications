import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { updateCustomer } from "../redux/actions/customers";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function UserListComponent() {
  const history = useHistory();
  const dispatch = useDispatch();

  const rowNav = (index) => {
    console.log("row index :", index);
  };

  const customers = useSelector((state) => state.customers);
  console.log("application State :", customers);

  const editRow = (row, rowIndex, type) => {
    let tempList = [...customers.customerList];
    let tempRow = { ...row };
    tempRow.isEditable = !tempRow.isEditable;
    if(type === 'delete') {
        tempList.splice(rowIndex, 1);
    } else {
        tempList.splice(rowIndex, 1, tempRow);
    }
    
    console.log("temp:", tempList);
    dispatch(updateCustomer(tempList, rowIndex));
  };

  const handleChange = (event, index) => {
    let tempList = [...customers.customerList];
    let tempRow = tempList[index];
    tempRow[event.target.id] = event.target.value;
    tempList.splice(index, 1, tempRow);
    console.log("temp:", tempList);
    dispatch(updateCustomer(tempList, index));
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Degree</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.customerList.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.isEditable ? (
                  <TextField
                    id="name"
                    variant="standard"
                    value={row.name}
                    onChange={(e) => {
                      handleChange(e, rowIndex);
                    }}
                    onBlur={() => {
                      editRow(row, rowIndex);
                    }}
                  />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell align="right">
                {row.isEditable ? (
                  <TextField
                    id="age"
                    variant="standard"
                    value={row.age}
                    onChange={(e) => {
                      handleChange(e, rowIndex);
                    }}
                    onBlur={() => {
                      editRow(row, rowIndex);
                    }}
                  />
                ) : (
                  row.age
                )}
              </TableCell>
              <TableCell align="right">
                {row.isEditable ? (
                  <TextField
                    id="degree"
                    variant="standard"
                    value={row.degree}
                    onChange={(e) => {
                      handleChange(e, rowIndex);
                    }}
                    onBlur={() => {
                      editRow(row, rowIndex);
                    }}
                  />
                ) : (
                  row.degree
                )}
              </TableCell>
              <TableCell align="right">
                {row.isEditable ? (
                  <TextField
                    id="city"
                    variant="standard"
                    value={row.city}
                    onChange={(e) => {
                      handleChange(e, rowIndex);
                    }}
                    onBlur={() => {
                      editRow(row, rowIndex);
                    }}
                  />
                ) : (
                  row.city
                )}
              </TableCell>
              <TableCell align="right">
                <button
                  onClick={() => {
                    editRow(row, rowIndex, 'edit');
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    editRow(row, rowIndex, 'delete');
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    history.push(`/user/${rowIndex}`);
                  }}
                >
                  View
                </button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
