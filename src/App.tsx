import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Foodlog from "./pages/Foodlog";
import Activitylog from "./pages/Activitylog";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { user, isUserFetched } = useAppContext();

  if (!isUserFetched) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      {!user ? (
        <Route path="*" element={<Login />} />
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="food" element={<Foodlog />} />
          <Route path="activity" element={<Activitylog />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      )}
    </Routes>
  );
};  // 👈 THIS WAS MISSING

export default App;