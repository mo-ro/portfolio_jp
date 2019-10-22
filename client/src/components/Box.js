import React from "react";
import styled from "styled-components";
import {
  space,
  width,
  fontSize,
  color,
  border,
  shadow,
  layout,
} from "styled-system";
import PropTypes from "prop-types";

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
        && > * {transform: skew${direction}(${-1 * amount}deg)}
      `;
    }
  }}

  box-sizing: border-box;
`;

Box.propTypes = {
  as: PropTypes.oneOf(["div", "button", "a"]),
  children: PropTypes.node,
  bg: PropTypes.string,
  skew: PropTypes.shape({
    way: PropTypes.oneOf(["horizontal", "vertical"]),
    amount: PropTypes.oneOf(["positive", "negative"]),
  }),
};

export default Box;
