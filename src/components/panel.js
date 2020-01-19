import React, {useMemo} from "react";
import * as THREE from "three";
import PropTypes from "prop-types";
import {a, interpolate} from "react-spring/three";

import PanelHeading from "./panelHeading";

const Panel = ({url, mouse, ...props}) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url, tex => {
    tex.minFilter = THREE.LinearFilter;
  }), [url]);
  const height = 8;
  const width = height * 1.618;
  return (
    <a.group rotation={mouse.interpolate((x, y) => [y/3000, x/3000, 0])}>
      <a.mesh {...props}>
        <planeBufferGeometry attach="geometry" args={[width, height]} />
        <meshLambertMaterial attach="material">
          <primitive attach="map" object={texture}  />
        </meshLambertMaterial>
        <PanelHeading position={[0, 3, 0]}>About</PanelHeading>
      </a.mesh>
    </a.group>
  );
};

Panel.prototype = {
  url: PropTypes.string.isRequired,
}

export default Panel;