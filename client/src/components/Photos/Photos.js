import React, { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import Photo from "./Photo/Photo";
import { useSelector } from "react-redux";
import useStyles from "./styles";
// import FileBase from "react-file-base64";

const Photos = ({ setCurrentId }) => {
  const photos = useSelector((state) => state.photos);

  const classes = useStyles();

  console.log(photos);

  return !photos.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {photos.map((photo) => (
        <Grid key={photo._id} item xs={12} sm={6} md={6}>
          <Photo photo={photo} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Photos;
