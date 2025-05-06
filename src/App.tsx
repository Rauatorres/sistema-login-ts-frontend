import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Login from "./Login";
import Home from "./Home";
import Cadastrar from "./Cadastrar";

const App = (_props: object)=>
<CookiesProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
    </Routes>
  </BrowserRouter>
</CookiesProvider>

export default App;