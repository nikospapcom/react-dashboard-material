/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef, useState, Fragment } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, Button, Collapse, colors } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  toggleIcon: {
    width: 16,
    height: 16,
    marginLeft: "auto"
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.primary.main
    }
  },
  buttonNested: {
    color: colors.blueGrey[800],
    padding: "10px 8px 10px 40px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightRegular
  },
  buttonNestedActive: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightRegular,
    "& $icon": {
      color: theme.palette.primary.main
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  // const [open, setOpen] = useState([
  //   { id: 0, collapsed: true },
  //   { id: 1, collapsed: false }
  // ]);

  // const handleClick = index => {

  //   open[0].collapsed = false;
  //   setOpen(open);
  //   console.log(open);

  //   const test = open.find(item => item.id === index).collapsed;

  //   console.log('test')
  //   console.log(test)

  // };


  const [open, setOpen] = useState(false);

  const handleClick = index => {

    setOpen(!open);

  };


  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map((page, index) =>
        page.subpages ? (
          <Fragment key={index}>
            <ListItem className={classes.item} disableGutters key={page.title}>
              <Button
                className={classes.button}
                onClick={() => handleClick(index)}
              >
                <div className={classes.icon}>{page.icon}</div>
                {page.title}
                {open ? (
                  <ExpandLess className={classes.toggleIcon} />
                ) : (
                  <ExpandMore className={classes.toggleIcon} />
                )}
              </Button>
            </ListItem>
            <Collapse in={open} id={index} timeout="auto" unmountOnExit>
              <List disablePadding>
                {page.subpages.map(subpage => (
                  <ListItem disableGutters key={subpage.title}>
                    <Button
                      activeClassName={classes.buttonNestedActive}
                      className={classes.buttonNested}
                      component={CustomRouterLink}
                      to={subpage.href}
                    >
                      {subpage.title}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Fragment>
        ) : (
          <ListItem className={classes.item} disableGutters key={page.title}>
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.href}
            >
              <div className={classes.icon}>{page.icon}</div>
              {page.title}
            </Button>
          </ListItem>
        )
      )}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
