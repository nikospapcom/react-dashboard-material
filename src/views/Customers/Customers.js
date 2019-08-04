import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";

import { CustomersToolbar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Customers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Customers</title>
      </Helmet>
      <CustomersToolbar />
    </div>
  );
};

export default Customers;
