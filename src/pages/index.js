import React, {useState, useCallback} from "react";
import * as THREE from "three";
import {Canvas, useThree} from "react-three-fiber";
import {useSpring, interpolate, a} from "react-spring/three";

import Layout from "../components/layout";
import Scene from "../components/scene";
import Floor from "../components/floor";
import Panels from "../components/panels";

import useYScroll from "../helpers/useYScroll";

import image from "../images/lowpolyworld6.png";
import aboutImage from "../images/about.png";

import "../style/index.css";

const panelData = [
  {
    heading: "About",
    image: image
  },
  {
    heading: "Works",
    image: image
  },
]

const IndexPage = () => {
  const [{ mouse }, set] = useSpring(() => ({ mouse: [0, 0] }));
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => { return (set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }))}, []);
  const [y] = useYScroll([0, 4000], { domTarget: window });
  return (
    <Layout>
      <Canvas
        className="canvas"
        invalidateFrameloop
        camera={{ position: [0, 5, 15], fov: 75 }}
        gl={{ alpha: false }}
        onCreated={({ gl, scene }) => {
          scene.background = new THREE.Color('#ffffff')
          scene.rotation.set(0, 0, 0);
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
        onPointerMove={onMouseMove}
        >
        <Scene>
          <ambientLight intensity={1} />
          <a.group position-z={y.interpolate(y => (y / 1000) * 25)}>
            {/* <Panel url={image} position={[0, 5, 2]} opacity={y.interpolate([200, 320], [1, 0])} mouse={mouse} /> */}
            <Panels panels={panelData} mouse={mouse} y={y} />
            <Floor />
          </a.group>
        </Scene>
      </Canvas>
    </Layout>
  );
};

export default IndexPage
