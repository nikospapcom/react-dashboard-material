import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Helmet } from "react-helmet";

import {
  CustomersToolbar,
  CustomersTable,
  CustomersFilters,
  CustomersPanel
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

  const [openFilters, setOpenFilters] = useState(false);
  const handleFiltersOpen = () => {
    setOpenFilters(true);
  };
  const handleFiltersClose = () => {
    setOpenFilters(false);
  };

  const [openPanel, setOpenPanel] = useState(false);
  const handlePanelOpen = () => {
    setOpenPanel(true);
  };
  const handlePanelClose = () => {
    setOpenPanel(false);
  };

  const user = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    state: "",
    country: "",
    gender: "male"
  }

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Customers</title>
      </Helmet>
      <CustomersToolbar onFiltersOpen={handleFiltersOpen} onPanelOpen={handlePanelOpen} />
      <div className={classes.content}>
        <CustomersTable users={users} />
      </div>
      <CustomersFilters onClose={handleFiltersClose} open={openFilters} />
      <CustomersPanel onClose={handlePanelClose} open={openPanel} user={user} />
    </div>
  );
};

export default Customers;
