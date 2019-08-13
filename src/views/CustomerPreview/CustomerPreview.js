import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Helmet } from "react-helmet";

import {
  ProfileOverview
} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  
}));

const CustomerPreview = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Customer Preview</title>
      </Helmet>
      <div>
        <ProfileOverview />
      </div>
    </div>
  );
};

export default CustomerPreview;
