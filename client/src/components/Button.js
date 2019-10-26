import React from "react";
import styled from "styled-components";
import Box from "@components/Box";
import { themeGet } from "@styled-system/theme-get";

const Button = ({ children, ...props }) => (
  <Box as="button" {...props}>
    <Inner>{children}</Inner>
  </Box>
);

const Inner = styled.span`
  font-size: ${themeGet("fontSize.0")};
`;

export default Button;
