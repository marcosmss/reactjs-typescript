import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Button from "../../components/Button/index.tsx";
import If from "../../components/Condition/index.tsx";
import styles from "./styles";

import axios from "axios";
import { baseURL } from "../../services/api";

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
    <Grid>
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
        {posts.map((item) => (
          <Grid
            item
            xs={11}
            md={12}
            container
            justify="center"
            alignItems="center"
          >
            <Grid
              container
              item
              xs={10}
              alignItems="center"
              style={{ border: "1px solid #cecece", margin: "10px 0px" }}
            >
              <Grid
                style={{ borderBottom: "1px solid #cecece", width: "100%" }}
              >
                <Typography>{item.title}</Typography>
              </Grid>

              <Grid>
                <Typography>{item.body}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </If>
    </Grid>
  );
};

export default Home;
