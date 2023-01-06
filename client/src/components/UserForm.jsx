import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const style = {
  width: 400,
};
function UserForm() {
    const [value, setValue] = React.useState(null);

  return (
    <div>
      <div className="user-form">
        <TextField style={style} id="username" label="Name" type="text" />
        <TextField id="email" label="Email" type="text" />
        <TextField id="address" label="Address" type="text" />
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
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
          label="Country"
        //   onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
              
      </div>
      {/* <TextField id="outlined-basic" label="Name" variant="outlined"  name='username' type='text'/>
          <TextField id="outlined-basic" label="Email" variant="outlined" /> */}
    </div>
  );
}

export default UserForm;
