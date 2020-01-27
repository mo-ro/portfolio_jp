import React from "react";
import * as THREE from "three";

class Floor extends React.Component {
  constructor() {
    super();
    this.width = 400;
    this.height = 400;
    this.scale = 5;
    this.cols = this.width / this.scale;
    this.rows = this.height / this.scale;
  }

  render() {
    let rects = [];

    let planeGeometry = new THREE.PlaneBufferGeometry(this.scale, this.scale);
    let edges = new THREE.EdgesGeometry(planeGeometry);

    for(let i = 0; i < this.cols; i++) {
      for(let j = 0; j < this.rows; j++) {
        rects.push(
          <mesh key={i + "-" + j} position={[i * this.scale, j * this.scale, 0]}>
            {/* <mesh>
              <planeBufferGeometry attach="geometry" args={[this.scale, this.scale]} position={[0, -1, 0]} />
              <meshPhongMaterial attach="material" color="white" />
            </mesh> */}
            <lineSegments geometry={edges} material={new THREE.LineBasicMaterial({ color: "#dddddd" })} ></lineSegments>
          </mesh>
        )
      }
    }

    return (
      <mesh position={[-1 * this.width / 2, 0, this.height / 2]} rotation={[-1 * Math.PI / 2, 0, 0]}>
        {rects}
      </mesh>
    )
  }
};

export default Floor;