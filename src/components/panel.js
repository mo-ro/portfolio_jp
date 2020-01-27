import React, {useMemo, useState, useCallback} from "react";
import * as THREE from "three";
import PropTypes from "prop-types";
import {a, useSpring} from "react-spring/three";
import {useFrame} from "react-three-fiber";

import PanelHeading from "./panelHeading";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/fragmentShader.glsl";

const Panel = ({heading, url, hoverImage, mouse, opacity, ...props}) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url, tex => {
    tex.minFilter = THREE.LinearFilter;
  }), [url]);
  const hoverTexture = useMemo(() => new THREE.TextureLoader().load(hoverImage, tex => {
    tex.minFilter = THREE.LinearFilter;
  }), [hoverImage]);
  const height = 8;
  const width = height * 1.618;

  let mousee = new THREE.Vector2(0, 0)
  window.addEventListener('mousemove', ev => {
    // mousee.x = (ev.clientX / window.innerWidth) * 2 - 1;
    // mousee.y = -(ev.clientY / window.innerHeight) * 2 + 1;
    // 0 -> -1   1 -> 0
    mousee.x = (ev.clientX / window.innerWidth) - 1;
    mousee.y = -(ev.clientY / window.innerHeight) / (window.innerWidth / window.innerHeight)

    // console.log(mousee)
  })

  console.log(window.innerWidth / window.innerHeight)

  const uniforms = {
    u_aspect: {value: window.innerWidth / window.innerHeight},
    u_image: { type: 't', value: texture },
    u_imagehover: { type: 't', value: hoverTexture },
    u_mouse: { value: mousee },
    u_time: { value: 0 },
    u_res: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight)
    }
  }

  useFrame(() => uniforms.u_time.value += 0.01);

  return (
    <a.mesh rotation={mouse.interpolate((x, y) => [y/3000, x/3000, 0])} {...props} >
      <a.mesh onClick={e => console.log('click')}>
        <planeBufferGeometry attach="geometry" args={[width, height]} center />
        {/* <a.meshLambertMaterial attach="material" transparent opacity={opacity} depthTest={false}>
          <primitive attach="map" object={texture}  />
        </a.meshLambertMaterial> */}
        <a.shaderMaterial attach="material" uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} defines={{PR: window.devicePixelRatio.toFixed(4)}}>
          {/* <primitive attach="map" object={texture}  /> */}
        </a.shaderMaterial>
      </a.mesh>
      <PanelHeading position={[5, -6, 1]}>{heading}</PanelHeading>
    </a.mesh>
  );
};

Panel.prototype = {
  url: PropTypes.string.isRequired,
}

export default Panel;