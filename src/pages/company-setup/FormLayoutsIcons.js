// ** MUI Imports
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'


// ** Icons Imports
import MessageOutline from 'mdi-material-ui/MessageOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'

const FormLayoutsIcons = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    // Upload the selected file to the server
    // You can use any library or API for this step
  };
  return (
    <Card>
      <CardHeader title='Company Setup' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Company Name'
                placeholder='Tesla Motors'
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position='start'>
              //       <AccountOutline />
              //     </InputAdornment>
              //   )
              // }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Company Address'
                placeholder='example address: 27 baker street'
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position='start'>
              //       <AccountOutline />
              //     </InputAdornment>
              //   )
              // }}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                fullWidth
                label='Priority Name'
                placeholder='Leonard Carter'
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position='start'>
                //       <AccountOutline />
                //     </InputAdornment>
                //   )
                // }}
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='Email'
                label='Email'
                placeholder='Email here '
                helperText='You can use letters, numbers & periods'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='text'
                label='Status'
                placeholder='Status'
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position='start'>
              //       <Phone />
              //     </InputAdornment>
              //   )
              // }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                label='Note or Comment'
                placeholder='Comment...'
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MessageOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} display={"flex"} flexDirection={"column"}>
              {previewUrl && <img src={previewUrl} alt="Preview" style={{ maxWidth: '120px' }} />}
              <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                onChange={handleFileSelect}
              />
              <label htmlFor="file-input">
                <Button variant="contained" component="span">
                  {selectedFile ? selectedFile.name : 'Choose a file'}
                </Button>
              </label>


            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsIcons
