import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Avatar,
  Divider,
  Grid,
  Chip
} from "@material-ui/core";

import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  Github as GithubIcon,
  Slack as SlackIcon,
  Twitter as TwitterIcon
} from "icons";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    paddingBottom: 0
  },
  card: {
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 140
  },
  avatar: {
    width: 100,
    height: 100,
    display: "block",
    margin: "-65px auto 15px",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)"
  },
  social: {
    textAlign: "center",
    margin: theme.spacing(1)
  },
  socialButton: {
    width: 30,
    height: 30,
    minHeight: 30,
    marginLeft: theme.spacing(0.7),
    marginRight: theme.spacing(0.7),
    color: "#818ea3"
  },
  socialButtonIcon: {
    width: 16,
    height: 16
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2)
  },
  chips: {
    textAlign: "center"
  },
  chipItem: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(1)
  }
}));

const ProfileOverview = props => {
  const { open, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card className={classes.card} {...rest}>
      <CardMedia
        className={classes.media}
        image="/images/profile-bg.jpeg"
        title="Contemplative Reptile"
      />
      <CardContent className={classes.content}>
        <Avatar
          alt="Papageorgiou Nikos"
          src="/images/avatars/avatar-3.jpg"
          className={classes.avatar}
        />
        <Typography gutterBottom variant="h5" component="h2" align="center">
          Papageorgiou Nikos
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="center"
        >
          Front End developer
        </Typography>
        <div className={classes.social}>
          <Fab
            color="default"
            aria-label="Facebook"
            className={classes.socialButton}
          >
            <FacebookIcon className={classes.socialButtonIcon} />
          </Fab>
          <Fab
            color="default"
            aria-label="Google"
            className={classes.socialButton}
          >
            <GoogleIcon className={classes.socialButtonIcon} />
          </Fab>
          <Fab
            color="default"
            aria-label="Github"
            className={classes.socialButton}
          >
            <GithubIcon className={classes.socialButtonIcon} />
          </Fab>
          <Fab
            color="default"
            aria-label="Slack"
            className={classes.socialButton}
          >
            <SlackIcon className={classes.socialButtonIcon} />
          </Fab>
          <Fab
            color="default"
            aria-label="Twitter"
            className={classes.socialButton}
          >
            <TwitterIcon className={classes.socialButtonIcon} />
          </Fab>
        </div>
        <Divider className={classes.divider} />
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Typography variant="body2" color="textPrimary">
              Email
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              admin@nikospap.com
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="body2" color="textPrimary">
              Phone
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              +306981234567
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="body2" color="textPrimary">
              Location
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Athens
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="body2" color="textPrimary">
              Customer ID
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              123456789
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <div className={classes.chips}>
          <Chip
            label="React JS"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.chipItem}
          />
          <Chip
            label="VueJS"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.chipItem}
          />
          <Chip
            label="Javascript"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.chipItem}
          />
          <Chip
            label="HTML & CSS"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.chipItem}
          />
          <Chip
            label="User Experience"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.chipItem}
          />
        </div>
      </CardContent>
    </Card>
  );
};

ProfileOverview.propTypes = {
  className: PropTypes.string
};

export default ProfileOverview;
