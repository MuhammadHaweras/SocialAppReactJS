import React from "react";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import SignInForm from "./_auth/forms/SignInForm";

import SIgnUpForm from "./_auth/forms/SIgnUpForm";
import AuthLayout from "./_auth/forms/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages/Home";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />

          <Route path="/sign-up" element={<SIgnUpForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
