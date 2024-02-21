import React from 'react';
import { DashboardPage } from './pages/DashboardPage';
import Header from './pages/Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path="/" element={<DashboardPage/>} />
        <Route  path="/users" element={<UserPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
