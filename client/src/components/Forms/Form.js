import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { addPhoto } from "../../actions/photos";

const Form = (currentId,setCurrentId) => {
  const [photoData, setPhotoData] = useState({
    creator: "",
    message: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch =useDispatch();
  const clear = () => {
    setCurrentId(0)
    setPhotoData({ creator: "", message: "", selectedFile: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // if(currentId){
    //   dispatch(updatePost(currentId,photoData))
    //   console.log(photoData)
    // }else{
      dispatch(addPhoto(photoData));

    // }
    // clear()
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> ADD PHOTO </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={photoData.creator}
          onChange={(e) =>
            setPhotoData({ ...photoData, creator: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={photoData.message}
          onChange={(e) =>
            setPhotoData({ ...photoData, message: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPhotoData({ ...photoData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
