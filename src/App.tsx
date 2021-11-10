import React from 'react';

import './App.css';

import { ThemeProvider } from 'styled-components';
import { theme } from './views/layout/theme';

function App() {
  return (
    // eslint-disable-line
    <ThemeProvider theme={theme}>
      <p>Home page</p>
    </ThemeProvider>
  );
}

export default App;
