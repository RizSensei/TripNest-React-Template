import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function RequireAuth() {
  const { token } = useAuth();
  const location = useLocation();
  return token
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}
