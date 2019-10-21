import React from "react";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

const Box = ({ children, color }) => (
  <Wrapper bg="black.0">
    {children}
    <p className="a">{color}</p>
  </Wrapper>
);

const Wrapper = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export default Box;
