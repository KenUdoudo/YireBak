import { InventoryProvider } from "./context/InventoryContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import OrderList from "./pages/OrderList";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Stock from "./pages/Stock";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Router>
      <InventoryProvider>
        <div className="w-full h-screen flex">
          
          {/* Sidebar */}
          <Sidebar />

          {/* Right Side (Topbar + Content) */}
          <div className="flex-1 flex flex-col">

            {/* Topbar */}
            <Topbar />

            {/* Page Content */}
            <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/order-list" element={<OrderList />} />
                <Route path="/users" element={<Users />} />
                <Route path="/product-stock" element={<Stock />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/log-out" element={<Logout />} />
                <Route path="/sales" element={<Sales />} />
              </Routes>
            </div>

          </div>

        </div>
      </InventoryProvider>
    </Router>
  );
}

export default App;