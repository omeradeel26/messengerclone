import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path= "/signup" element={<h1>Hello</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
