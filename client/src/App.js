import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelHome from "./pages/hotelHome/HotelHome";
import List from "./pages/list/List";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels/:id" element={<HotelHome/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
