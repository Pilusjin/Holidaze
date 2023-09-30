import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VenuePage from "./pages/VenuePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import MyVenues from "./pages/MyVenues";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/venue/:id" element={<VenuePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Profile/:username" element={<ProfilePage />} />
        <Route path="/Profile/:username/my-venues" element={<MyVenues />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
