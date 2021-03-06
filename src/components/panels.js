import React from "react";

import Panel from "./panel";

const Panels = ({panels, y, ...props}) => {
  return (
    <>
      {panels.map((panel, i) => (
        <Panel
          heading={panel.heading}
          url={panel.image}
          position={[0, 5, i * -30]}
          opacity={y.interpolate([i * 1200 + 200, i * 1200 + 320], [1, 0])}
          {...props}
        />
      ))}
    </>
  );
};

export default Panels;