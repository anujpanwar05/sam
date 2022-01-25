import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import "./app-creative.min.css";
import "./icons.min.css";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import People from "./views/People";
import Login from "./views/Login";
import Register from "./views/Register";

const Component1 = () => {
  return <h1>Component 1</h1>;
};

const Component2 = () => {
  return <h1>Component 2</h1>;
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "dashboard", element: <Dashboard /> },
    { path: "people", element: <People /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;