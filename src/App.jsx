import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/SignIn/Signin";
import Register from "./Pages/Register/Register";
import All_Properties from "./Pages/All_Properties/All_Properties";
import My_Saved_Trips from "./Pages/My_Saved_Trips/My_Saved_Trips";
import Property_Description from "./Pages/Property_Description/Property_Description";
import Checkout from "./Pages/Checkout/Checkout";
import Payment from "./Pages/Payment/Payment";
import Booking_Confirmation from "./Pages/Booking_Confirmation/Booking_Confirmation";
import User_Profile from "./Pages/User_Profile/User_Profile";
import Trip_History from "./Pages/Trip_History/Trip_History";
import Wishlist from "./Pages/Wishlist/Wishlist";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties" element={<All_Properties />} />
          <Route path="/property-description/:slug" element={<Property_Description />} />
          <Route path="/property-description" element={<Property_Description />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/booking-confirmed" element={<Booking_Confirmation />} />
          <Route path="/my-saved-trips" element={<My_Saved_Trips />} />
          <Route path="/user-profile" element={<User_Profile />} />
          <Route path="/trip-history" element={<Trip_History />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
