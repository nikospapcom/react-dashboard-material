import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Typography,
  IconButton,
  colors,
  Button
} from "@material-ui/core";
import clsx from "clsx";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CollapsedFilter from "./CollapsedFilter";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: { },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  header: {
    backgroundColor: colors.indigo[500],
    padding: theme.spacing(2),
    color: theme.palette.white,
    display: "flex",
    alignItems: "center"
  },
  headerTitle: {
    color: theme.palette.white,
    margin: theme.spacing(0.75, 0, 0.75, 0)
  },
  filterButton: {
    marginRight: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
  }
}));

const CustomersFilters = props => {
  const { open, className, onClose, ...rest } = props;

  const classes = useStyles();

  const filters = [
    {
      name: "Name"
    },
    {
      name: "Email"
    },
    {
      name: "Location"
    },
    {
      name: "Phone"
    },
    {
      name: "Sex"
    }
  ];

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      onClose={onClose}
      open={open}
      classes={{
        paper: classes.drawer
      }}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <div className={classes.header}>
          <IconButton
            color="inherit"
            className={classes.filterButton}
            aria-label="close"
            size="small"
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
          <Typography variant="h5" className={classes.headerTitle}>
            Filters
          </Typography>
        </div>
        <div className={classes.content}>
          {filters.map((filter, index) => (
            <div key={index}>
              <CollapsedFilter filter={filter} />
            </div>
          ))}
        </div>
        <div className={classes.footer}>
          <Button color="primary" variant="contained" fullWidth>
            Apply filters
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

CustomersFilters.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};

export default CustomersFilters;
