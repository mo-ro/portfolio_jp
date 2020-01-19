import React, {useState, useCallback} from "react";
import * as THREE from "three";
import {Canvas, Dom} from "react-three-fiber";
import {useSpring, interpolate} from "react-spring/three";

import Layout from "../components/layout";
import Scene from "../components/scene";
import Floor from "../components/floor";
import Panel from "../components/panel";

import image from "../images/lowpolyworld6.png";

import "../style/index.css";

const IndexPage = () => {
  const [{ mouse }, set] = useSpring(() => ({ mouse: [0, 0] }));
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => { return (set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }))}, []);
  console.log(mouse)
  return (
    <Layout>
      <Canvas
        className="canvas"
        invalidateFrameloop
        camera={{ position: [0, 5, 15], fov: 75, rotation: [0, 0, 0] }}
        gl={{ alpha: false }}
        onCreated={({ gl, scene }) => {
          scene.background = new THREE.Color('#ffffff')
          scene.rotation.set(0, 0, 0);
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
        >
        <Scene>
          <ambientLight intensity={1} />
          <Panel url={image} position={[0, 5, 2]} mouse={mouse} />
          <Floor />
        </Scene>
      </Canvas>
      <div onMouseMove={onMouseMove} className="masterContainer"></div>
    </Layout>
  );
};

export default IndexPage
