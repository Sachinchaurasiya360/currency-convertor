import { BrowserRouter, Routes, Route, redirect, useNavigate } from "react-router-dom";
import Dashboard from "./Components/Dasbhoard";
import Landing from "./Components/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
