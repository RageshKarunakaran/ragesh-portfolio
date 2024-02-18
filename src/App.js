import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import "./style/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import NoPage from "./components/NoPage";

function App() {
  // const [cls, setCls] = React.useState("dark");
  return (
    <>
    {/* <Button onClick={()=>
                  cls === "light" ? setCls("dark") : setCls("light")
                  }
                  >
                  Click
                </Button> */}
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
