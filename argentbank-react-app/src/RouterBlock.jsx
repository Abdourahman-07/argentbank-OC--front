import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Header from "./components/header";

function MainContent() {
  const location = useLocation();
  const isDarkBg = ["/connection", "/tableau-de-bord"].includes(
    location.pathname
  );

  return (
    <main className={isDarkBg ? "main bg-dark" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connection" element={<SignIn />} />
        <Route path="/tableau-de-bord" element={<User />} />
      </Routes>
    </main>
  );
}

function RouterBlock() {
  return (
    <Router>
      <Header />
      <MainContent />
    </Router>
  );
}

export default RouterBlock;
