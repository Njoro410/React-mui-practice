import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const Post = () => {
  return (
    <div> 
      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="F1 and Insights"
          subheader="May 21, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://www.bat.com/group/sites/uk__9d9kcy.nsf/vwPagesWebLive/DOCBNG3C/$FILE/medMDCBNG3G.jpg?openelement"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Mclaren has yet to improve on their aerodynamics after a bad result
            seen at Imola this weekend. Joe Brown, McLaren Racing CEO reported
            that the FIA was against their latest improvement which he is
            confident will help improve their perfomance hence appearing in the
            mid field.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
