import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { ShowData } from "./pages/ShowData";

import { ContextProvider } from "./contexts/context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Titulo da página</h1>
        <hr></hr>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
