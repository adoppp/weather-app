import "@/App.module.scss";
import { RouterProvider } from "react-router";
import { router } from "@/routing/routing";

export function App() {
  return <RouterProvider router={router} />
};