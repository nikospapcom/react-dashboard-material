import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)',
    borderRadius: 4
  },
  avatarTeamG:{
    backgroundColor: "#CBFEE9",
    color: "#4EB88E"
  },
  avatarTeamA:{
    backgroundColor: "#D5DDFC",
    color: "#7D90E7"
  },
  avatarTeamD:{
    backgroundColor: "#E9CCD2",
    color: "#CC7F8E"
  },
}));

const TeamsList = props => {
  const { open, className, ...rest } = props;

  const classes = useStyles();

  return (
    <List className={classes.root} {...rest}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarTeamG}>G</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Team George" secondary="8 Members" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarTeamA}>A</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Team Antony" secondary="12 Members" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarTeamD}>D</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Team Dean" secondary="20 Members" />
      </ListItem>
    </List>
  );
};

TeamsList.propTypes = {
  className: PropTypes.string
};

export default TeamsList;
