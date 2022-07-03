import React from 'react';

import './App.css';

import { ThemeProvider } from 'styled-components';
import { theme } from './layout/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './layout/layout';

function App() {
  return (
    // eslint-disable-line
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
