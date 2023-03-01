import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext();

function AuthContext({ children }) {
  // const api = {
  //   key: process.env.REACT_APP_APIKEY,
  //   base: "https://api.themoviedb.org/3/",
  // };

  // const value = { api };
  const movieTitle = "Mahogany teakwood";
  const value = { movieTitle };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
