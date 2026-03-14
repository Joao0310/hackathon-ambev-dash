import Layout from "./components/Layout/Layout";
import Overview from "./pages/Overview/Overview";
import Logistica from "./pages/logistica/Logistica";
import Custo from "./pages/custo/Custo";
import Risco from "./pages/riscos/Riscos";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/logistica" element={<Logistica />} />
          <Route path="/custo" element={<Custo />} />
          <Route path="/riscos" element={<Risco />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;