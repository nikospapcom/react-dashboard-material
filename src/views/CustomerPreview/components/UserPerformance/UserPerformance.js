import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from "@material-ui/core";

import {
  ArrowRight as ArrowRightIcon
} from "@material-ui/icons";

import { data, options } from "./chart";

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: "relative"
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

const UserPerformance = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Performance Report" />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar data={data} options={options} />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

UserPerformance.propTypes = {
  className: PropTypes.string
};

export default UserPerformance;
