import React, { ReactNode } from "react";
import { useAuthContext } from "~/contexts/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredModule?: string;
}

export function ProtectedRoute({
  children,
  requiredModule,
}: ProtectedRouteProps) {
  const { user, hasModule } = useAuthContext();

  if (!user) {
    return <div>Not authenticated</div>;
  }

  if (requiredModule && !hasModule(requiredModule)) {
    return <div>Access denied</div>;
  }

  return <>{children}</>;
}
