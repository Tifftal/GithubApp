import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import RepositoryPage from './pages/RepositoryPage/RepositoryPage';
import Header from './components/Header';

import './styles/styles.module.scss';

const App: React.FC = () => {
  const repsString = localStorage.getItem('reps');
  const [repos, setRepositories] = useState(repsString ? JSON.parse(repsString) : []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage repos={repos} setRepositories={setRepositories} />} />
        <Route path="/repository">
          <Route path=":id" element={<RepositoryPage repos={repos} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
