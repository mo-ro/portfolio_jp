import React from "react";
import * as THREE from "three";
import {Canvas} from "react-three-fiber";

import Layout from "../components/layout";
import Scene from "../components/scene";
import Floor from "../components/floor";

import "../style/index.css";

const IndexPage = () => (
  <Layout>
    <Canvas
      className="canvas"
      invalidateFrameloop
      camera={{ position: [0, 4, 10], fov: 100 }}
      gl={{ alpha: false }}
      onCreated={({ gl, scene }) => {
        scene.background = new THREE.Color('#ffffff')
        scene.rotation.set(Math.PI / 10, 0, 0);
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }
    }>
      <Scene>
        <ambientLight intensity={1} />
        <Floor />
      </Scene>
    </Canvas>
  </Layout>
)

export default IndexPage
