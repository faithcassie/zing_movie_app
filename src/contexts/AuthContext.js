import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext();

function AuthContext({ children }) {
  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.themoviedb.org/3/",
  };

  const value = { api };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
