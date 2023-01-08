import React from 'react'
import { Button } from '@mui/material'

function UploadCSV() {
    
  return (
      <div>
          <input type="file" />
          <Button variant="contained" color="success" >
          ADD
        </Button>
    </div>
  )
}

export default UploadCSV