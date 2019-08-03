import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Line } from 'react-chartjs-2';

import { data, options } from './chart';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  cardContent: {
    padding: "1rem 0 0 0",
    "&:last-child": {
      paddingBottom: 0
    }
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  cardContentTop: {
    paddingLeft: "1rem",
    paddingRight: "1rem"
  },
  title: {
    fontWeight: 700,
    color: "#818ea3"
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    alignItems: "center"
  },
  differenceIcon: {
    color: theme.palette.success.light
  },
  differenceValue: {
    color: theme.palette.success.light,
    marginRight: theme.spacing(1)
  },
  chartContainer: {
    height: "100px",
    marginTop: -theme.spacing(1.5)
  }
}));

const Budget = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.cardContent}>
        <Grid
          container
          justify="space-between"
          className={classes.cardContentTop}
        >
          <Grid item>
            <Typography
              className={classes.title}
              gutterBottom
              variant="body2"
            >
              BUDGET
            </Typography>
            <Typography variant="h3">$11,000</Typography>
          </Grid>
          <Grid item>
            <div className={classes.difference}>
              <ArrowUpwardIcon className={classes.differenceIcon} />
              <Typography className={classes.differenceValue} variant="body2">
                12%
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className={classes.chartContainer}>
          <Line
            data={data}
            options={options}
          />
        </div>
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
