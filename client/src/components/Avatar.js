import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import systemPropTypes from "@styled-system/prop-types";

const Avatar = ({ ...props }) => <Wrapper {...props}></Wrapper>;

const Wrapper = styled.img.attrs(props => {
  let size;
  switch (props.size) {
    case "sm":
      size = 32;
      break;

    case "md":
      size = 48;
      break;

    case "lg":
      size = 56;
      break;
  }
  return { height: size, width: size };
})`
  border-radius: ${themeGet("radii.5")};
  border: ${themeGet("borders.2")} ${themeGet("colors.black")};
  object-fit: cover;
  ${space}
  ${color}
`;

Avatar.defaultProps = {
  size: "sm",
  src: PropTypes.string,
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  ...systemPropTypes.space,
  ...systemPropTypes.color,
};

export default Avatar;
