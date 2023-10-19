import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Authorization from "./pages/Authorization";
import CRM from "./pages/CRM";
import Purchase from "./pages/Purchase";
import Sales from "./pages/Sales";
import Store from "./pages/Store";
import Production from "./pages/Production";
import FaultyAndWarranty from "./pages/FaultyAndWarranty";
import Accounts from "./pages/Accounts";
import MIS from "./pages/MIS";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Authorization" element={<Authorization />} />
          <Route path="/CRM" element={<CRM />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Production" element={<Production />} />
          <Route path="/FaultAndWarranty" element={<FaultyAndWarranty/>} />
          <Route path="/Accounts" element={<Accounts/>} />
          <Route path="/MIS" element={<MIS/>} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
