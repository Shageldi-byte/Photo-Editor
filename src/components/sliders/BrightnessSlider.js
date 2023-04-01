import PropTypes from "prop-types";
import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = {
  root: {
    width: "200px",
  },
  slider: {
    padding: "22px 0px",
  },
};

class BrightnessSlider extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.showSlider ? (
          <div className={classes.root}>
            <Typography id="label" style={{ color: "white" }}>
              Exhibition: {Math.floor(this.props.value)}
            </Typography>
            <Slider
              classes={{ container: classes.slider }}
              value={this.props.value}
              aria-labelledby="label"
              onChange={this.props.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

BrightnessSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    value: state.brightnessSliderValue,
    showSlider: state.showSlider,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event, value) => {
      dispatch({
        type: "HANDLE_BRIGHTNESS_CHANGE",
        payload: value,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(BrightnessSlider));
