import React from "react";
import Time from "../utils/Time";
// import PropTypes from 'prop-types'

const Footer = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-16 bg-cyan-800">
      <Time />
    </div>
  );
};

// Footer.propTypes = {}

export default Footer;
