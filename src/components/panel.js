import React, {useMemo, useState, useCallback} from "react";
import * as THREE from "three";
import PropTypes from "prop-types";
import {a, useSpring} from "react-spring/three";
import {useHover} from "react-use-gesture";

import PanelHeading from "./panelHeading";

const Panel = ({heading, url, mouse, opacity, ...props}) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url, tex => {
    tex.minFilter = THREE.LinearFilter;
  }), [url]);
  const height = 8;
  const width = height * 1.618;

  return (
    <a.mesh rotation={mouse.interpolate((x, y) => [y/3000, x/3000, 0])} {...props} >
      <a.mesh onClick={e => console.log('click')}
      onPointerOver={e => console.log('over')}
      onPointerOut={e => console.log('out')}>
        <planeBufferGeometry attach="geometry" args={[width, height]} center />
        <a.meshLambertMaterial attach="material" transparent opacity={opacity} depthTest={false}>
          <primitive attach="map" object={texture}  />
        </a.meshLambertMaterial>
      </a.mesh>
      <PanelHeading position={[0, 3, 0]}>{heading}</PanelHeading>
    </a.mesh>
  );
};

Panel.prototype = {
  url: PropTypes.string.isRequired,
}

export default Panel;