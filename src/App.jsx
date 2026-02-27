import { InventoryProvider } from "./context/InventoryContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Invoices from "./pages/Invoices";
import Sales from "./pages/Sales";
import Sidebar from "./components/Sidebar";
function App() {
 

  return (
    <Router> 
    <InventoryProvider className="w-full flex flex-row">
      <Sidebar />
      {/*<div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>*/}
    </InventoryProvider>
    </Router>
  )
}

export default App
