import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectRoute from "./components/auth/ProtectRoute.jsx";
import { LayoutLoader } from "./components/layout/Loaders.jsx";
// function that allows you to render a dynamic import as a regular component
// Only components required at specific path are loaded dynamically
const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const Groups = lazy(() => import("./pages/Groups.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function App() {
  let user = true;
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          {/* <Route
          path="/"
          element={
            <ProtectRoute user={false}>
              <Home />
            </ProtectRoute>
          }
        /> */}

          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
