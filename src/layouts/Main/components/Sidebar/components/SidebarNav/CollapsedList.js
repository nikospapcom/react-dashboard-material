import React, { forwardRef, useState, Fragment } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, Button, Collapse, colors } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
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

const CollapsedItems = props => {
  const { page } = props;

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = index => {
    setOpen(!open);
  };

  return (
    <Fragment key={page.title}>
      <ListItem className={classes.item} disableGutters key={page.title}>
        <Button className={classes.button} onClick={handleClick}>
          <div className={classes.icon}>{page.icon}</div>
          {page.title}
          {open ? (
            <ExpandLess className={classes.toggleIcon} />
          ) : (
            <ExpandMore className={classes.toggleIcon} />
          )}
        </Button>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
  );
};

CollapsedItems.propTypes = {
  className: PropTypes.string,
  page: PropTypes.object.isRequired
};

export default CollapsedItems;
