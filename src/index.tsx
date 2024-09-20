import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import App from "./App"
import Login from "./components/Login"
import HomePage from "./components/HomePage"
import Me from "./components/Me"

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/me"
        element={<Me />}
      />
      <Route
        path="/contact"
        element={<h1>Contact</h1>}
      />
    </Route>,
  ),
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
