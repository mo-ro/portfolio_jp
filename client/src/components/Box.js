import React from "react";
import styled from "styled-components";
import {
  space,
  width,
  fontSize,
  color,
  background,
  border,
  shadow,
  layout,
} from "styled-system";
import PropTypes from "prop-types";

import bgImage from "@images/bg/pattern.svg";
import { themeGet } from "@styled-system/theme-get";

const Box = ({ children, ...props }) => (
  <Wrapper border="2" borderColor="black" boxShadow="medium" {...props}>
    <p className="a">{children}</p>
  </Wrapper>
);

const Wrapper = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${border}
  ${shadow}
  ${layout}
  ${background}

  ${props => {
    let direction;
    let amount;
    if (props.skew) {
      switch (props.skew.way) {
        case "horizontal":
          direction = "X";
          amount = props.skew.amount === "positive" ? "10" : "-10";
          break;

        case "vertical":
          direction = "Y";
          amount = props.skew.amount === "positive" ? "3" : "-3";
          break;

        default:
          break;
      }
      return `
        transform: skew${direction}(${amount}deg);
        && > *, &&::before {transform: skew${direction}(${-1 * amount}deg)}
      `;
    }
  }}

  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  transform-origin: top left;

  ${props =>
    props.gradient && `background: ${themeGet(props.gradient)(props)};`}

  ${props =>
    props.hasBg &&
    `&&::before {
      position: absolute;
      height: 150%;
      width: 120%;
      display: block;
      content: "";
      background-image: url(${bgImage});
      transform-origin: top left;
    }`}
`;

Box.propTypes = {
  as: PropTypes.oneOf(["div", "button", "a"]),
  children: PropTypes.node,
  bg: PropTypes.string,
  skew: PropTypes.shape({
    way: PropTypes.oneOf(["horizontal", "vertical"]),
    amount: PropTypes.oneOf(["positive", "negative"]),
  }),
  hasBg: PropTypes.bool,
};

export default Box;
