"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { db, User } from "@/lib/db";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  signup: (name: string, email: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Init DB and check session
    db.init();
    const session = db.getCurrentUser();
    setUser(session);
    setIsLoading(false);
  }, []);

  const login = (email: string) => {
    const u = db.login(email);
    setUser(u);
    router.push("/");
  };

  const signup = (name: string, email: string) => {
    const u = db.signup(name, email);
    setUser(u);
    router.push("/");
  };

  const logout = () => {
    db.logout();
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
