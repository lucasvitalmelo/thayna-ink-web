import Layout from "@/components/layout";
import { Orders } from "@/pages/orders";
import { Settings } from "@/pages/settings";
import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>
  )
}