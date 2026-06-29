import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/HomeScreen'
import Users from "./screens/UsersScreen";
import Contact from "./screens/ContactScreen";
import About from "./screens/AboutScreen";
import Navbar from "./screens/Navbar";
import Registr from "./screens/RegistrScreen"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/Users" element={<Users></Users>} />
          <Route path="/Contact" element={<Contact></Contact>} />
          <Route path="/About" element={<About></About>} />
          <Route path="/Registr" element={<Registr></Registr>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
