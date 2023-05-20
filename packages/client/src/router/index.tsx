import NotFount from "@/pages/404";
import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
} from "react-router-dom";
const Home = React.lazy(() => import("@/pages/Home"));
const BasicLayout = React.lazy(() => import("@/layout/BasicLayout"));

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <BasicLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFount />,
    },
  ],
  {
    // basename: import.meta.env.BASE_URL.replace(/\/$/, ""),
  },
);
