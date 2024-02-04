import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/contacts/Contacts";
import Payment from "./pages/payment/Payment";
import Sliders from "./components/sliders/Sliders";
import StepsTab from "./components/tabs/StepsTab";


function App() {
    return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path ="/services" element ={<Services/>}/>
        <Route path="/contacts" element={<Contacts/>} />
        <Route path ="/payment" element={<Payment/>}/>
        <Route path ="/sliders"  element={<Sliders/>}/>
        <Route path ="/steps"  element={<StepsTab/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
    
  )
}

export default App;
