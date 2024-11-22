import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Header from "./Helper Pages/Header.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./Helper Pages/Footer.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
  return (
      <BrowserRouter>
          <main>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/contact" element={<Contact/>}/>
              </Routes>
              <Footer/>
          </main>
      </BrowserRouter>
  )
}

export default App
