import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Header from "./components/header";

function RouterBlock() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connection" element={<SignIn />} />
        <Route path="/tableau-de-bord" element={<User />} />
      </Routes>
    </Router>
  );
}

export default RouterBlock;
