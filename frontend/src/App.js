import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "./components/AuthPage";
import { UserContext } from "./components/GlobalStates/UserContext";
import Pages from "./pages";
import ChooseList from "./pages/ChooseList";
import Homepage from "./pages/Homepage";
import Manage from "./pages/Manage";

import LogIn from "./pages/SignIn/LogIn";
import SignUp from "./pages/SignIn/SignUp";

function App() {
  const { user } = useContext(UserContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<AuthPage />}>
          <Route path="/editor/*" element={<Pages />}>
            <Route index element={<ChooseList />} />
            {user?.isAdmin &&
              <Route path="manage" element={<Manage />} />
            }
          </Route>
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
