import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";

import {
  PersonAddOutlined as PersonAddOutlinedIcon,
  BugReportOutlined as BugReportOutlinedIcon,
  Check as CheckIcon
} from "@material-ui/icons";

import mockData from "./data";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  content: {
    padding: 0
  },
  avatar: {
    backgroundColor: "#D5DDFC",
    color: "#7D90E7"
  },
  actions: {
    justifyContent: "center"
  }
}));

function AvatarIcon(action) {
  switch (action.value) {
    case "assing":
      return <PersonAddOutlinedIcon />;
    case "bug":
      return <BugReportOutlinedIcon />;
    case "add":
      return <PersonAddOutlinedIcon />;
    case "complete":
      return <CheckIcon />;
    default:
      return <CheckIcon />;
  }
}

const UserActivity = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [activities] = useState(mockData);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        subtitle={`${activities.length} in total`}
        title="User Activity"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {activities.map((activity, i) => (
            <ListItem divider={i < activities.length - 1} key={activity.id}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <AvatarIcon value={activity.action} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={activity.name}
                secondary={`${activity.updatedAt.fromNow()}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          Load more
        </Button>
      </CardActions>
    </Card>
  );
};

UserActivity.propTypes = {
  className: PropTypes.string
};

export default UserActivity;
