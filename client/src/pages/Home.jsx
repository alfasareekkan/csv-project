import React from "react";
import Button from "@mui/material/Button";

import NavBar from "../components/NavBar";
import UserList from "../components/UserList";
import AddModal from "../components/Modal";
import "./home.css";
import UserForm from "../components/UserForm";

function Home() {
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container" >
      <div className="buttons">
        <Button variant="contained" color="success" onClick={handleOpen}>
          ADD
        </Button>
        <Button variant="outlined" color="success">
          DOWNLOAD
        </Button>
        <Button variant="outlined" color="success">
          UPLOAD
        </Button>
      </div>
      <div>
        <UserList />
          </div>
          <AddModal handleOpen={handleOpen} handleClose={handleClose} open={open} title="Add User" >
              <UserForm/>
          </AddModal>
    </div>
  );
}

export default Home;
