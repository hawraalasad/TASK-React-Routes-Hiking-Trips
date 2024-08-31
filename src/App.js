import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Home />
      <TripsList />
      <TripDetail />
    </div>
  );
}

export default App;
