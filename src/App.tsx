import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './App.css';
import Layout from './components/layout';
import Home from './pages/Home';
import ConversionHistory from './pages/ConversionHistory';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }></Route>
          <Route
            path="/history"
            element={
              <Layout>
                <ConversionHistory />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
