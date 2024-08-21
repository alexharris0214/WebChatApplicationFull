import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState("")
    const [token, setToken] = useState("")

    const contextValues = {
        userId,
        setUserId,
        token,
        setToken
    }
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
