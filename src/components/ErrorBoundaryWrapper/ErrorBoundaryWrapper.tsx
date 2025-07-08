import { useLocation, Outlet } from "react-router-dom";
import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";

export function ErrorBoundaryWrapper() {
  const location = useLocation();

  return (
    <ErrorBoundary key={location.pathname}>
      <Outlet />
    </ErrorBoundary>
  );
}