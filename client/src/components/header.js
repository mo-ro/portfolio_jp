import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Box from "@components/Box";

const Header = ({ siteTitle }) => (
  <header>
    <Box skew={{ way: "horizontal", amount: "negative" }} hasBg>
      aaa
    </Box>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
