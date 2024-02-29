import React from "react";
import "./App.css";
import { DashboardPage } from "./pages/DashboardPage";
import Header from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import OpenIdPage from "./pages/OpenIdPage";
import { Container } from "@mui/system";
import ServerPage from "./pages/ServerPage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container fixed>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/openId" element={<OpenIdPage />} />
            <Route path="/servers" element={<ServerPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
