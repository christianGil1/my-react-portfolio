import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Home, Profile, Journal } from './components';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/my-react-portfolio">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/journal" element={<Journal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
