import Login from "./pages/Login";
import Dashboard from "./modules/dashboard/screens/Dashboard";
import Layout from "./modules/common/components/Layout/Layout";

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
      <Login />
    </Layout>
  );
}
