import React, { useEffect, useState } from "react";
import SpinLoader from "../../../components/SpinLoader";

const AuthGuard = ({ children }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return loading ? children : <SpinLoader />;
};

export default AuthGuard;
