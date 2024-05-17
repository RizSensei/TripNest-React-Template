import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/SignIn/Signin";
import Register from "./Pages/Register/Register";
import All_Properties from "./Pages/All_Properties/All_Properties";
import My_Saved_Trips from "./Pages/My_Saved_Trips/My_Saved_Trips";
import Property_Description from "./Pages/Property_Description/Property_Description";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties" element={<All_Properties />} />
          <Route path="/property-description" element={<Property_Description />} />
          <Route path="/my-saved-trips" element={<My_Saved_Trips />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
