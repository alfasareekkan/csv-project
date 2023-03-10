import React, { useEffect } from "react";
import Papa from 'papaparse';

import Button from "@mui/material/Button";
import { useDispatch,useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import UserList from "../components/UserList";
import AddModal from "../components/Modal";
import "./home.css";
import UserForm from "../components/UserForm";
import { useGetAllUsersMutation } from "../app/api/userApi";
import { setAllUsers } from "../features/userSlice";
import UploadCSV from "../components/UploadCSV";

function Home() {
const [open, setOpen] = React.useState(false);
const [openFile, setOpenFile] = React.useState(false);
  const handleOpen = () => setOpen(true);console.log("Hi");
  const handleClose = () => setOpen(false);
  const handleOpenFile = () => setOpenFile(true);
  const handleCloseFile = () => setOpenFile(false);
  const dispatch = useDispatch();
  const [getAllUsers]=useGetAllUsersMutation()
 async function getData() {
   let result = await getAllUsers().unwrap()
   dispatch(setAllUsers(result))

  }
  const users = useSelector((state) => state.user.users)
  function downloadCSV() {
    let data = users.reduce((acc, value) => {
      acc.push([
        value.name,
        value.email,
        value.address,
        value.dob,
        value.country
      ])
      return acc
    }, [])
    let csvData = [["name", "email", "address", "dob", "country"], ...data]
     csvData = Papa.unparse(csvData);

    const blob = new Blob([csvData], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'table.csv';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  }
  useEffect(() => {
    getData();
  },[])
  return (
    <div className="container" >
      <div className="buttons">
        <Button variant="contained" color="success" onClick={handleOpen}>
          ADD
        </Button>
        <Button variant="outlined" color="success" onClick={downloadCSV}>
          DOWNLOAD
        </Button>
        <Button variant="outlined" color="success" onClick={handleOpenFile}>
          UPLOAD
        </Button>
      </div>
      <div>
        <UserList />
          </div>
          <AddModal id="dfsdf" handleOpen={handleOpen} handleClose={handleClose} open={open} title="Add User" >
              <UserForm/>
      </AddModal>
      <AddModal id="asdf" handleOpen={handleOpenFile} handleClose={handleCloseFile} open={openFile} title="Upload File">
        <UploadCSV handleClose={handleCloseFile} />
      </AddModal>
    </div>
  );
}

export default Home;
