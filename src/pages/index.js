import React from "react";
import * as THREE from "three";
import {Canvas} from "react-three-fiber";

import Layout from "../components/layout";
import Scene from "../components/scene";
import Floor from "../components/floor";
import Panel from "../components/panel";

import image from "../images/lowpolyworld6.png";

import "../style/index.css";

const IndexPage = () => (
  <Layout>
    <Canvas
      className="canvas"
      invalidateFrameloop
      camera={{ position: [0, 5, 15], fov: 75 }}
      gl={{ alpha: false }}
      onCreated={({ gl, scene }) => {
        scene.background = new THREE.Color('#ffffff')
        scene.rotation.set(Math.PI / 40, 0, 0);
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }
    }>
      <Scene>
        <ambientLight intensity={1} />
        <Panel url={image} position={[0, 5, 2]} />
        <Floor />
      </Scene>
    </Canvas>
  </Layout>
)

export default IndexPage
