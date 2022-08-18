import { useState } from "react";

// Components
import Home from "./components/home/Home";
import Men from "./components/men/Men"
import Women from "./components/women/Women"
import Error from "./components/error/Error";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <Link to={"/"}>
            <h3>
              trendotoyol
            </h3>
          </Link>
          <ul className={"nav-links"} id={show ? "hidden" : ""}>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/men"}>
              <li>Men</li>
            </Link>
            <Link to={"/women"}>
              <li>Women</li>
            </Link>
          </ul>
          <button className="toggle-icon"
            onClick={() => { setShow(!show) }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;