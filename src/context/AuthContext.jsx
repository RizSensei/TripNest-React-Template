import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() =>
    window.sessionStorage.getItem("tripnest_token"),
  );

  const value = useMemo(
    () => ({
      token,
      setSession: (nextToken) => {
        window.sessionStorage.setItem("tripnest_token", nextToken);
        setToken(nextToken);
      },
      clearSession: () => {
        window.sessionStorage.removeItem("tripnest_token");
        setToken(null);
      },
    }),
    [token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
