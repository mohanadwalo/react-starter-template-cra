import React, { useEffect } from 'react';

import './App.css';

import { ThemeProvider } from 'styled-components';
import { theme } from './layout/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './layout/layout';
import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';

function App() {
  return (
    // eslint-disable-line
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='page1' element={<Page1 />} />
            <Route path='page2' element={<Page2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
