import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const App = () => {
  const { isLoggedIn } = useSelector((store) => store.user);

  return (
    <div className="relative w-full font-tilt ">
      <BrowserRouter>
        <Routes>
          {isLoggedIn && <Route path="/" element={<Navigate to="/chat" />} />}
          {/* Routes for logged-in users */}
          {isLoggedIn && (
            <>
              <Route path="/chat" element={<Chat />} />
              <Route path="/logout" element={<Logout />} />
            </>
          )}

          {/* Routes for non-logged-in users */}
          {!isLoggedIn && (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
            </>
          )}

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
