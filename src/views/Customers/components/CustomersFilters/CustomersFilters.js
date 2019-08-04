import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer, useMediaQuery } from "@material-ui/core";
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {},
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const CustomersFilters = props => {
  const { open, className, onClose, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });

  console.log(props)

  return (
    <Drawer
      variant={isDesktop ? 'persistent' : 'temporary'}
      anchor="right"
      onClose={onClose}
      open={open}
      classes={{
        paper: classes.drawer
      }}
    >
      <div  {...rest}
        className={clsx(classes.root, className)}>sidebar</div>
    </Drawer>
  );
};

CustomersFilters.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

export default CustomersFilters;
