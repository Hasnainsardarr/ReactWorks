import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<TransactionPage />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
