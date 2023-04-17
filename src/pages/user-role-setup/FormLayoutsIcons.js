// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import MessageOutline from 'mdi-material-ui/MessageOutline'

const FormLayoutsIcons = () => {
  return (
    <Card>
      <CardHeader title='User Role Setup' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Role Name'
                placeholder='Leonard Carter'
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
                type='text'
                label='Role Description'
                placeholder='Role description here '
                // helperText='You can use letters, numbers & periods'
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position='start'>
                //       <EmailOutline />
                //     </InputAdornment>
                //   )
                // }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='text'
                label='Status'
                placeholder='solved'
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
