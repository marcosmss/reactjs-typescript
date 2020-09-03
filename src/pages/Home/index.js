import React from "react";

import Grid from "@material-ui/core/Grid";

import Button from "../../components/Button/index.tsx";
import If from "../../components/Condition/index.tsx";
import List from "../../components/List/index.tsx";
import styles from "./styles";

import axios from "axios";
import { baseURL } from "../../services/api.ts";

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  const classes = styles();

  const getList = () =>
    axios
      .get(`${baseURL}/posts`)
      .then((res) => {
        return setPosts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

  return (
    <>
      <If condition={posts && posts.length < 1}>
        <Grid
          item
          xs={12}
          container
          justify="center"
          alignItems="center"
          className={classes.buttonGetPosts}
        >
          <Button variant="contained" color="primary" onClick={() => getList()}>
            Get List
          </Button>
        </Grid>
      </If>

      <If condition={posts && posts.length}>
        <List posts={posts} classes={classes} />
      </If>
    </>
  );
};

export default Home;
