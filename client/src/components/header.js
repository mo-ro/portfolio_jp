import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Box from "@components/Box";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const Header = ({ siteTitle, ...props }) => (
  <Wrapper>
    <div
      css={`
        display: flex;
      `}
    >
      <Box
        mr={2}
        skew={{ way: "horizontal", amount: "negative" }}
        hasBg
        flex="1"
      >
        aaa
      </Box>
      <Box
        as="button"
        gradient="colors.button.orange"
        skew={{ way: "horizontal", amount: "negative" }}
        hasBg
        width={140}
        fontWeight={themeGet("fontWeight.bold")}
      >
        メニュー
      </Box>
    </div>
  </Wrapper>
);

const Wrapper = styled.header`
  padding: ${themeGet("space.2")};
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
