import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Helmet } from "react-helmet";

import { Grid } from "@material-ui/core";
import { ProfileOverview, TeamsList, UserActivity } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const CustomerPreview = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Customer Preview</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <ProfileOverview />
          <TeamsList />
        </Grid>
        <Grid item sm={8} xs={12}>
          <UserActivity />
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomerPreview;
