import React, { useEffect, useState } from "react";
import SpinLoader from "../../../components/SpinLoader";

const ProjectOverViewGuard = ({ children }) => {
  const [loadChild, setLoadChild] = useState(false);

  useEffect(() => {
  }, []);

  return  children
};

export default ProjectOverViewGuard;
