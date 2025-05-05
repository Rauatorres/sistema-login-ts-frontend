import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { CookiesProvider } from "react-cookie";

const App = (_props: object)=>
<CookiesProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
</CookiesProvider>

export default App;