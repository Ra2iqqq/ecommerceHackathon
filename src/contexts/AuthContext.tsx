import React, { createContext, useContext, ReactNode, useState, useCallback } from "react";

interface User {
  id: string;
  Firstname?: string;
  Lastname?: string;
  firstname?: string;
  lastname?: string;
  profile_picture?: string;
}

interface AuthContextType {
  user: User | null;
  logout: () => Promise<void>;
  hasModule: (module: string) => boolean;
  roleName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User | null>(null);
  const [roleName] = useState("user");

  const logout = useCallback(async () => {
    // TODO: Implement logout logic
  }, []);

  const hasModule = useCallback((_module: string) => {
    // TODO: Implement module check logic
    return true;
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, hasModule, roleName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
}
