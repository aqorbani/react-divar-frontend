import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { getProfile } from "src/services/user";

import PageNotFound from "src/pages/404";
import AdminPage from "src/pages/AdminPage";
import AuthPage from "src/pages/AuthPage";
import Dashboard from "src/pages/Dashboard";
import HomePage from "src/pages/HomePage";

const Router = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  if (isLoading) return <p>Loading</p>;

  console.log({ data, isLoading, error });
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
