import React from "react";
import { MetroSpinner } from "react-spinners-kit";

const SpinLoader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MetroSpinner size={150} color="#ed7d31" loading={true} />
    </div>
  );
};
export default SpinLoader;
