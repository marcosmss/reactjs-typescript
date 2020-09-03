import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ListModel } from "./model.ts";

const List: React.FC<ListModel> = ({ posts, classes }) => (
  <>
    {posts.map((item) => (
      <Grid item xs={11} md={12} container justify="center" alignItems="center">
        <Grid
          container
          item
          xs={10}
          alignItems="center"
          className={classes.post}
        >
          <Grid className={classes.postItem}>
            <Typography className={classes.titlePost}>{item.title}</Typography>
          </Grid>

          <Grid className={classes.postItem}>
            <Typography className={classes.messagePost}>{item.body}</Typography>
          </Grid>
        </Grid>
      </Grid>
    ))}
  </>
);

export default List;
