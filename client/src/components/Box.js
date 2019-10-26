import React from "react";
import styled from "styled-components";
import {
  space,
  width,
  typography,
  color,
  background,
  border,
  shadow,
  layout,
  flexbox,
} from "styled-system";
import PropTypes from "prop-types";
import systemPropTypes from "@styled-system/prop-types";
import bgImage from "@images/bg/pattern.svg";
import { themeGet } from "@styled-system/theme-get";

const Box = ({ children, ...props }) => (
  <Wrapper border="2" borderColor="black" boxShadow="medium" {...props}>
    <span>{children}</span>
  </Wrapper>
);

const Wrapper = styled.div`
  ${space}
  ${width}
  ${typography}
  ${color}
  ${border}
  ${shadow}
  ${layout}
  ${background}
  ${flexbox}

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
        && > *, &&::before {
          transform: skew${direction}(${-1 * amount}deg);
          display: block
        }
      `;
    }
  }}

  border-radius: ${themeGet("radii.1")}px;
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

Box.defaultProps = {
  bg: "white",
};

Box.propTypes = {
  as: PropTypes.oneOf(["div", "button", "a"]),
  children: PropTypes.node,
  skew: PropTypes.shape({
    way: PropTypes.oneOf(["horizontal", "vertical"]),
    amount: PropTypes.oneOf(["positive", "negative"]),
  }),
  hasBg: PropTypes.bool,
  gradient: PropTypes.string,
  ...systemPropTypes.background,
  ...systemPropTypes.flexbox,
  ...systemPropTypes.layout,
};

export default Box;
