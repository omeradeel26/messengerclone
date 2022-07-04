import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"

import { createTheme, ThemeProvider } from '@mui/material/styles';

import {DataContextProvider} from './context/DataContext'

const THEME = createTheme({
  typography: {
   "fontFamily": `"Segoe UI", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <DataContextProvider>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Dashboard />} />
             <Route path="/landing" element={<Landing />} />
             <Route path= "/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </DataContextProvider>
    </ThemeProvider>
  );
}

export default App;
