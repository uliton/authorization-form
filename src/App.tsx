import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';

export const App: React.FC = () => {
  const [accept, setAccept] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn accept={setAccept} />} />
        <Route path="/auth/login" element={<SignIn accept={setAccept} />} />
        <Route path="/auth/register" element={<SignUp accept={setAccept} />} />
        {accept && <Route path="/home" element={<Home />} />}
      </Routes>
    </div>
  );
};
