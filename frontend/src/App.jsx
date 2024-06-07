import React from 'react';
import MainView from './frontend/components/MainView';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, Arial',
  },
  palette: {
    primary: {
      main: '#5acccc', // Primary color
    },
    secondary: {
      main: '#f76434', // Secondary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainView />
    </ThemeProvider>
  );
}

export default App;
