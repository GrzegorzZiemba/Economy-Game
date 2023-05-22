import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import TradePage from "./pages/TradePage";

function App() {
  return (
    <div className="viewport-height">
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/trading" exact element={<TradePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
