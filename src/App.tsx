import "./App.css"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Box } from "@mui/material"

function App() {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "#8b8b8b",
          minHeight: "100vh",
          color: "#ffffff",
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}

export default App
