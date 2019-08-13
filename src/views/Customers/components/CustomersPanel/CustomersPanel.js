import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Typography,
  IconButton,
  colors,
  Button,
  TextField,
  Divider,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid
} from "@material-ui/core";
import clsx from "clsx";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const drawerWidth = "70%";

const useStyles = makeStyles(theme => ({
  root: {},
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
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  group: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row"
  },
  footer: {
    padding: theme.spacing(2)
  },
  cancelButton: {
    marginLeft: theme.spacing(1)
  }
}));

const CustomersFilters = props => {
  const { open, className, onClose, user, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState(user);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

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
            onClick={onClose}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
          <Typography variant="h5" className={classes.headerTitle}>
            New Customer
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="h5" gutterBottom={true}>
            General
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="First name"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="Email"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h5" gutterBottom={true}>
            Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Address"
                margin="dense"
                name="address"
                onChange={handleChange}
                required
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Postcode"
                margin="dense"
                name="postcode"
                onChange={handleChange}
                required
                value={values.postcode}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="State"
                margin="dense"
                name="state"
                onChange={handleChange}
                required
                value={values.state}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}></Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h5" gutterBottom={true}>
            Extras
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                margin="dense"
                name="phone"
                onChange={handleChange}
                required
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={8} xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  className={classes.group}
                  value={values.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio color="primary" />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div className={classes.footer}>
          <Button color="primary" variant="contained">
            Apply filters
          </Button>
          <Button
            color="primary"
            variant="outlined"
            className={classes.cancelButton}
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

CustomersFilters.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  user: PropTypes.object
};

export default CustomersFilters;
