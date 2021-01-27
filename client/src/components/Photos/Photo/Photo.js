import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import moment from "moment";
import ThumbUpIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from 'react-redux';
const Photo =({photo,setCurrentId})=>{
  const classes = useStyles();
  const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
        
      <CardMedia className={classes.media} image={photo.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={photo.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{photo.creator}</Typography>
        <Typography variant="body2">{moment(photo.createdAt).fromNow()}</Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{photo.message}</Typography>
        </CardContent>
          <CardActions className={classes.cardActions}>
            {/* <Button color="primary" size="small" onClick={() => dispatch(likePost(post._id))}> <ThumbUpIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount}</Button> */}
            {/* <Button color="primary" size="small" onClick={() => dispatch(deletePost(post._id))}> <DeleteIcon fontSize="small" /> Delete </Button> */}
          </CardActions>
         </Card>
        )
    };
    export default Photo;
