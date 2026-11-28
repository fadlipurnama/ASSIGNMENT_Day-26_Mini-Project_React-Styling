import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function ProtectedLayout() {
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let active = true;

    async function verifySession() {
      try {
        const res = await fetch(`${API_URL}/api/auth/get-session`, {
          credentials: "include",
        });
        if (!res.ok) {
          if (active) setIsAuthenticated(false);
          return;
        }
        const data = await res.json();
        if (active) {
          setIsAuthenticated(Boolean(data?.user || data?.session));
        }
      } catch {
        if (active) setIsAuthenticated(false);
      } finally {
        if (active) setChecking(false);
      }
    }

    verifySession();
    return () => {
      active = false;
    };
  }, [location.pathname]);

  if (checking) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-sm text-muted-foreground">
        Memverifikasi sesi login...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname + location.search }}
      />
    );
  }

  return <Outlet />;
}

export default ProtectedLayout;
