import React,{ useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";

import { CustomersToolbar, CustomersTable } from './components';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Customers = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Customers</title>
      </Helmet>
      <CustomersToolbar />
      <div className={classes.content}>
        <CustomersTable users={users} />
      </div>
    </div>
  );
};

export default Customers;
