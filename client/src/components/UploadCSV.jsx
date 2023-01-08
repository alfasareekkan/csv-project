import React, { useState } from 'react'
import { Button } from '@mui/material'
import Papa from 'papaparse';
import { useAddMultipleUsersMutation } from '../app/api/userApi';

function UploadCSV() {
    const [file, setFile] = useState();
    const [addMultipleUsers,{isLoading}] = useAddMultipleUsersMutation();
    const handleFile = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
    }
    const submitFile = () => {
        Papa.parse(file, {
            header: true,
            complete: async(r) => {
               await addMultipleUsers(e.data).unwrap()
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