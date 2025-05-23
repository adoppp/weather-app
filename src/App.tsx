import { Route, Routes } from "react-router-dom";
import type { routeType } from "routing/routes.types";
import { routes } from "@/routing/routes";

export function App() {

  return (
    <>
      <Routes>
        {
          routes.map(({ path, element }: routeType) => (
            <Route key={path} path={path} element={element} />
          ))
        }
      </Routes>
    </>
  );
};