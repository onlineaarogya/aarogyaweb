
import { withStyles } from '@material-ui/core/styles';
import { DropzoneDialogBase,DropzoneArea } from 'material-ui-dropzone';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import  { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  TextField,
  Snackbar,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
} from '@material-ui/core';

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

// CSS For Dialog Box and Dropzon box
const stylesss = makeStyles((theme) => ({
  dropZo: {
     
      zIndex:1250,
      position: "relative",
    },
   diaLog :
   {
      position: "absolute",
      zIndex:1252,
    },
  }
));




export default function CustomizedDialogs(props) {
    // const [open, setOpen] = React.useState(false);
    const classes = stylesss();
    // Code for Dropzone File
    const [open, setOpen] = React.useState(false);
      const [fileObjects, setFileObjects] = React.useState([]);

      const dialogTitle = () => (
        <>
          <span>Upload file</span>
          <IconButton
            style={{right: '12px', top: '8px', position: 'absolute'}}
            onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </>
      );
      // Code for DropZone File Ends

      // Code for Another Dialog Box 
   
      const [opens, setOpens] = React.useState(false);
      const [filess, setFiless] = React.useState();

     

      const handleClickOpen = () => {
        setOpens(true);
       
      };
      const handleClose = () => {
        setOpens(false);
      };
      const handleData = () =>
      {
          var dt =  document.getElementById('myInput').textContent;  
          alert(dt)
      }


      // Record Store in Array 

      // let empArray = []
      let buffer = []

      let empArray = [{"name":filess ? filess.[0].file.name : null},{"type":filess ? filess.[0].file.type : null},{"fileSize":filess ? filess.[0].file.size : null}]

      // let reactJson = buffer.push(recArry);

      // const myObjStr = JSON.stringify(recArry);
      // console.log(myObjStr);
       const myObjStr = JSON.stringify(empArray);
       console.log(myObjStr);

  return (
 <div>
        <Grid item xs={12} lg={12}>
    <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
      Add New Medical Record 
      {/* {filess ? filess.[0].file.name : null } */}
    </Button>
    
    <DropzoneDialogBase
        dialogTitle={dialogTitle()}
        acceptedFiles={['image/*']}
        fileObjects={fileObjects}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        dropzoneClass= {
          classes.dropZo
        }
        onAdd={newFileObjs => {
          setFiless(newFileObjs)
          console.log('onAdd', newFileObjs);
          console.log('The File Name is',filess)
          setFileObjects([].concat(fileObjects, newFileObjs));
          handleClickOpen();
        }}
        onDelete={deleteFileObj => {
          console.log('onDelete', deleteFileObj);
        }}
        onClose={() => setOpen(false)}
        onSave={() => {
          console.log('onSave', fileObjects);
          setOpen(false);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />

      {/* Code for Dialog Box  */}
     
     
      <Dialog
        className={classes.diaLog}
        
        open={opens}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"> 
        
        <DialogTitle id="alert-dialog-slide-title">{"Select Record"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          
          {empArray.map((number) => 
                   <div>
                    <p>{number.name}</p>
                    <p>{number.type}</p>
                    <p>{number.fileSize}</p>
                   </div>
          )} 
           {/* <div id = "myInput">{filess ? filess.[0].file.name : null }</div>
           <div>{filess ? filess.[0].file.type : null }</div>
           <div>{filess ? filess.[0].file.size : null }</div> */}
         
          <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleData} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Auto Complete Box */}
      </Grid>
    </div>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
 
];
