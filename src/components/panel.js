import React from "react";
import * as THREE from "three";
import PropTypes from "prop-types";

const Panel = ({url, ...props}) => {
  const texture = new THREE.TextureLoader().load(url);
  const height = 8;
  const width = height * 1.618;
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[width, height]} />
      <meshLambertMaterial attach="material">
        <primitive attach="map" object={texture}  />
      </meshLambertMaterial>
    </mesh>
  );
};

Panel.prototype = {
  url: PropTypes.string.isRequired,
}

export default Panel;