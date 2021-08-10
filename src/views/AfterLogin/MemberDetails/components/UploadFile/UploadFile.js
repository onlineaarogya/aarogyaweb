import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { DropzoneDialog } from 'material-ui-dropzone';

import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const styless = makeStyles((theme) => ({
  root: {
    background: '#4caf50'
  }
}));


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


export default function CustomizedDialogs(props) {
    const [open, setOpen] = React.useState(false);

  return (
 <div>
    <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
      Add New Medical Record
    </Button>
        <DropzoneDialog
            acceptedFiles={['image/pdf']}
            cancelButtonText={"cancel"}
            submitButtonText={"submit"}
            maxFileSize={5000000}
            open={open}
            onClose={() => setOpen(false)}
            onSave={(files) => {
            console.log('Files:', files);
            setOpen(false);
            }}
            showPreviews={true}
            showFileNamesInPreview={true}
        />
    </div>
  );
}

