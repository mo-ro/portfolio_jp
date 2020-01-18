import React from "react";
import * as THREE from "three";
import { EdgesGeometry } from "three";

class Floor extends React.Component {
  constructor() {
    super();
    this.width = 200;
    this.height = 200;
    this.scale = 5;
    this.cols = this.width / this.scale;
    this.rows = this.height / this.scale;
  }

  // renderFloor() {
  //   let rects = [];
  //   for(let i = 0; i < this.cols; i++) {
  //     for(let j = 0; j < this.rows; j++) {
  //       rects.push(
  //         <>
  //           <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
  //           <meshPhongMaterial attach="material" color="#222222" wireframe />
  //         </>
  //       )
  //     }
  //   }
  //   return rects;
  // }

  render() {
    let rects = [];

    var planeGeometry = new THREE.PlaneBufferGeometry(this.scale, this.scale);
    var edges = new THREE.EdgesGeometry(planeGeometry);
    var lineBox = new THREE.LineSegments( edges, new THREE.LineBasicMaterial({ color: 0xff55dd }));

    for(let i = 0; i < this.cols; i++) {
      for(let j = 0; j < this.rows; j++) {
        rects.push(
          <mesh position={[i * this.scale, j * this.scale, 0]}>
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