import { Route, Routes } from "react-router-dom";
import About from "./about/About";
import Create from "./create/Create";
import Details from "./details/Details";
import Error from "./error/Error";
import Home from "./home/Home";
import Navcom from "./nav/Navbar";
import Update from "./update/Update";


function App() {
  return (
    <div className="App">
      <Navcom/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/update/:uid" element={<Update/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
