import Login from "./modules/authentication/screens/login/Login";
import Dashboard from "./modules/dashboard/screens/Dashboard";
import Layout from "./modules/common/components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import SignUp from "./modules/authentication/screens/signup/SignUp";
import NotFound from "./modules/common/components/screens/NotFound";

export default function App() {
  // replace firebase
  const user = true;

  if (user) {
    return (
      <Layout className="w-full h-screen p-12">
        <Dashboard />
      </Layout>
    );
  }

  return (
    <Layout className="flex flex-col items-center justify-center w-full h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
