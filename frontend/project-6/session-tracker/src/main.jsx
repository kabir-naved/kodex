import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route } from "react-router";
import Dashboard from "./pages/Dashboard.jsx";
import Library from "./pages/Library.jsx";


<Route path="/" element={<Dashboard />}>
  <Route path="/library" element={<Library />} />
</Route>;
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
