// src/Router.tsx
import { Route, Routes } from "react-router-dom";

import Layout from "@/components/layout";
import { SignIn } from "@/pages/sign-in";
import { Orders } from "@/pages/orders";
import { Settings } from "@/pages/settings";

import { ProtectedRoute } from "./protected-route";

export function Router() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}
