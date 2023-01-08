import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";

import { useAddUserMutation } from "../app/api/userApi";
import { setUser } from "../features/userSlice";


const style = {
  width: 400,
};

const btnStyle = {
    top: 15,
    left:150
}
function UserForm() {
  const [value, setValue] = React.useState(null);
  const [countries, setCountries] = React.useState([]);
  const [country, setCountry] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [addUser, { isLoading }] = useAddUserMutation()
  const dispatch=useDispatch()
  async function getAllCountries() {
    const countryList = await axios.get(
      "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json"
    );
    setCountries(countryList.data);
  }
  useEffect(() => {
    getAllCountries();
  }, []);
  async function handleClick() {
    if(address.trim() === "" ||
    name.trim() === "" ||
    email.trim() === "" ||
    value.toString().trim() === "" ||
    country.trim() === "") {
    toast.error("All fields are mandatory");

    }
    else if (
      !/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/i.test(email)) {
      toast.error("Invalid email format");
    } else if (name.length < 3 || name.length > 25) {
      toast.error("Name need minimum 3 or maximum 25 charachters");
    } else {
      
      let user = await addUser({ dob: value, country: country, name: name, address: address, email: email }).unwrap()
      dispatch(setUser(user));
    }
}
  return (
    <div>
      <div className="user-form">
        <TextField
          style={style}
          id="username"
          label="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="address"
          label="Address"
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-base">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            onChange={(e) => setCountry(e.target.value)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Country"
          >
            {countries?.map((data) => (
              <MenuItem value={data.name}>{data.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
          </div>
        
          <Button variant="contained" color="success" style={btnStyle} onClick={handleClick} >
          ADD
        </Button>
        <Toaster />
    </div>
  );
}

export default UserForm;
