import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material'
import Papa from 'papaparse';
import { useAddMultipleUsersMutation } from '../app/api/userApi';
import { insertManyUser } from '../features/userSlice';

function UploadCSV({handleClose}) {
    const [file, setFile] = useState();
    const [addMultipleUsers, { isLoading }] = useAddMultipleUsersMutation();
    const dispatch = useDispatch();
    const handleFile = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
    }
    const submitFile = () => {
        Papa.parse(file, {
            header: true,
            complete: async(r) => {
                let result = await addMultipleUsers({ data: r.data }).unwrap()
                dispatch(insertManyUser(result))
                handleClose()
            }
        })
    }
  return (
      <div>
          <input type="file" onChange={handleFile} />
          <Button variant="contained" color="success" onClick={submitFile}  >
          ADD
        </Button>
    </div>
  )
}

export default UploadCSV