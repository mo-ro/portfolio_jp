import React, {useMemo} from "react";
import * as THREE from "three";
import PropTypes from "prop-types";
import {a, interpolate} from "react-spring/three";

import PanelHeading from "./panelHeading";

const Panel = ({heading, url, mouse, opacity, ...props}) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url, tex => {
    tex.minFilter = THREE.LinearFilter;
  }), [url]);
  const height = 8;
  const width = height * 1.618;
  return (
      <a.mesh rotation={mouse.interpolate((x, y) => [y/3000, x/3000, 0])} {...props}>
        <planeBufferGeometry attach="geometry" args={[width, height]} center />
        <a.meshBasicMaterial attach="material" transparent opacity={opacity} depthTest={false}>
          <primitive attach="map" object={texture}  />
        </a.meshBasicMaterial>
        <PanelHeading position={[0, 2, 0]}>{heading}</PanelHeading>
      </a.mesh>
  );
};

Panel.prototype = {
  url: PropTypes.string.isRequired,
}

export default Panel;