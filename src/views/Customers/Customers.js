import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Helmet } from "react-helmet";

import {
  CustomersToolbar,
  CustomersTable,
  CustomersFilters
} from "./components";

import mockData from "./data";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Customers = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  const [openFilters, setOpenFilters] = useState(true);

  const handleFiltersOpen = () => {
    setOpenFilters(true);
  };

  const handleFiltersClose = () => {
    setOpenFilters(false);
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Customers</title>
      </Helmet>
      <CustomersToolbar onFiltersOpen={handleFiltersOpen}  />
      <div className={classes.content}>
        <CustomersTable users={users} />
      </div>
      <CustomersFilters
        onClose={handleFiltersClose}
        open={openFilters}
      />
    </div>
  );
};

export default Customers;
