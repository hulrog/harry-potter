import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  console.log("AuthContext: ");
  console.log(authenticated, currentUser);

  const instanceId = React.useRef(Date.now()); // Generate a unique ID using the current timestamp

  console.log("AuthContext instance ID:", instanceId.current); // Log the instance ID

  return (
    <AuthContext.Provider
      value={{ authenticated, currentUser, setAuthenticated, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
