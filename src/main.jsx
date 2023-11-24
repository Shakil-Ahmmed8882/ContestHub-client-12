import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";

import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
