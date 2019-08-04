import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";

const useStyles = makeStyles(theme => ({
  root: {},
  heading: {
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      justifyContent: "unset"
    }
  },
  headingTitle: {
    marginLeft: theme.spacing(0.5)
  },
  actionColumn: {
    textAlign: "center",
    marginTop: theme.spacing(0.5),
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
      marginTop: theme.spacing(0)
    }
  },
  filterButton: {
    marginLeft: theme.spacing(1)
  }
}));

const CustomersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container alignItems="center">
        <Grid item sm={6} xs={12}>
          <div className={classes.heading}>
            <Typography variant="h3" color="textSecondary">
              250
            </Typography>
            <Typography variant="h3" className={classes.headingTitle}>
              Customers
            </Typography>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.actionColumn}>
          <Button color="primary" variant="contained">
            Create customer
          </Button>
          <IconButton
            color="primary"
            className={classes.filterButton}
            aria-label="filter"
          >
            <FilterListIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

CustomersToolbar.propTypes = {
  className: PropTypes.string
};

export default CustomersToolbar;
