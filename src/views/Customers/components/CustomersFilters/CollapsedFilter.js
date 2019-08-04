import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

import {
  FormControlLabel,
  Checkbox,
  Collapse,
  Radio,
  RadioGroup,
  Paper,
  Input
} from "@material-ui/core";

import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon,
  RadioButtonChecked as RadioButtonCheckedIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  sizeIcon: {
    width: 18,
    height: 18
  },
  sizeRadioIcon: {
    width: 16,
    height: 16
  },
  group: {
    backgroundColor: "#F4F6F8",
    padding: theme.spacing(1, 1, 1, 3)
  },
  paper: {
    borderRadius: "4px",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    display: "flex",
    flexBasis: 500
  },
  input: {
    flexGrow: 1,
    fontSize: "0.8em",
    lineHeight: "0.8em",
    letterSpacing: "-0.05px"
  }
}));

const CollapsedFilters = props => {
  const { filter, onChange, ...rest } = props;

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleClick = index => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState("is");
  function handleRadioChange(event) {
    setValue(event.target.value);
  }

  const subfilters = [
    {
      name: "is"
    },
    {
      name: "is not"
    },
    {
      name: "is empty"
    },
    {
      name: "is field"
    }
  ];

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleClick}
            value={filter.name}
            icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}
            checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />}
            color="primary"
          />
        }
        label={filter.name}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <RadioGroup
          aria-label={filter.name}
          name={filter.name}
          className={classes.group}
          value={value}
          onChange={handleRadioChange}
        >
          {subfilters.map((filter, index) => (
            <Fragment key={index}>
              <FormControlLabel
                value={filter.name}
                control={
                  <Radio
                    icon={
                      <RadioButtonUncheckedIcon
                        className={classes.sizeRadioIcon}
                      />
                    }
                    checkedIcon={
                      <RadioButtonCheckedIcon
                        className={classes.sizeRadioIcon}
                      />
                    }
                    color="primary"
                  />
                }
                label={filter.name}
              />
              <Collapse in={value === filter.name} timeout="auto" unmountOnExit>
                <Paper {...rest} className={classes.paper}>
                  <Input
                    {...rest}
                    className={classes.input}
                    disableUnderline
                    onChange={onChange}
                    fullwidth="true"
                  />
                </Paper>
              </Collapse>
            </Fragment>
          ))}
        </RadioGroup>
      </Collapse>
    </div>
  );
};

CollapsedFilters.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

export default CollapsedFilters;
