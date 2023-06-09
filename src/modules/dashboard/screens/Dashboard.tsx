import Navigation from "../components/navigation/Navigation";
// import UseAirlinesData from "../hooks/UseAirlinesData";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "../../common/components/screens/NotFound";
import UserProfile from "./UserProfile";
import { data } from "../../../../FAKEDATA.json";

// use redux to pass data to table!!!!!!!!!!!

export default function Dashboard() {
  //  const { isLoading, isError, airlines } = UseAirlinesData();

  return (
    <div className="h-full flex bg-gray-50 p-6 rounded-xl">
      <Navigation />
      <main className="flex-grow p-12">
        <Routes>
          <Route path="/" element={<Home airlines={data} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="profile" element={<UserProfile />} />
        </Routes>
      </main>
    </div>
  );
}
