import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import GALLERY from "./images/Gallery.jpeg";
import { useDispatch } from "react-redux";
import { getPhotos } from "./actions/photos";
import Form from "./components/Forms/Form";
import Photos from "./components/Photos/Photos";
import useStyles from "./styles";

const App = () => {
  const { currentId, setCurrentId } = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  // }, [currentId,dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          {" "}
          PHOTO GALLERY
        </Typography>
        <img
          className={classes.image}
          src={GALLERY}
          alt="GALLERY"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Photos setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              {" "}
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
