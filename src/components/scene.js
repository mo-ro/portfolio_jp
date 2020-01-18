import React from "react";

const Scene = ({children}) => {
  return (
    <>
      <fog attach="fog" args={["#ffffff", 10, 100]} />
      <mesh>
        <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
        <meshNormalMaterial attach='material' />
      </mesh>
      {children}
    </>
  );
};

export default Scene;