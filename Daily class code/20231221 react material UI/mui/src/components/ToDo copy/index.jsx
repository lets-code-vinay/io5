import React from 'react';
import { Button, Divider, Stack } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const ToDo = () => {
    return(
        <>
       
        <h1>ToDo</h1>
        <Button variant='outlined'>Outlined Btn </Button>
        <Button variant='text'>Text Btn </Button>
        <Button variant='contained'>Contained Btn </Button>
<Divider />
{/* Disabled */}
        <Button variant='outlined' disabled>Outlined Btn </Button>
        <Button variant='text' disabled>Text Btn </Button>
        <Button variant='contained' disabled>Contained Btn </Button>
<Divider />
        <Button variant='contained' color='success'>success Btn </Button>
        <Button variant='contained' color='warning'>warning Btn </Button>
        <Button variant='contained' color='info'>info Btn </Button>
        <Button variant='contained' color='primary'>primary Btn </Button>
        <Button variant='contained' color='error'>error Btn </Button>
        <Button variant='contained' color='secondary'>secondary Btn </Button>

        <Divider />
        <Button 
            variant='contained' 
            color='secondary'
            startIcon={<CloudUploadIcon />}
            endIcon={<AdUnitsIcon />}

          >secondary Btn 
          </Button>

          <Divider />

          <Stack direction="row" spacing={2}>
          <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>

      <LoadingButton
        loading={true}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>

          </Stack>

        </>
    )
}

export default ToDo