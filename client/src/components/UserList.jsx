
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDeleteUserMutation } from '../app/api/userApi';
import { deleteUsers } from '../features/userSlice';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function userList() {
  const rows = useSelector((state) => state.user.users)
  const dispatch=useDispatch()
  const [deleteUser, { isLoading }] = useDeleteUserMutation()
  const handleDelete = async (id) => {
    let result = await deleteUser(id).unwrap()
    if (result) {
      dispatch(deleteUsers(id))
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.address}</TableCell>
              <TableCell >{row.dob}</TableCell>
              <TableCell >{row.country}</TableCell>
              <TableCell ><IconButton aria-label="edit" >
        <EditIcon />
      </IconButton></TableCell>
              <TableCell ><IconButton aria-label="delete"  onClick={()=>handleDelete(row._id)}>
        <DeleteIcon />
      </IconButton></TableCell>

      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
