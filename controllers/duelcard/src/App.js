import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import ReactDOM from 'react-dom'; 
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import AboutRules from './Pages/AboutRules';
import BuyDuelCard from './Pages/BuyDuelCard';
import DuelSomeone from './Pages/DuelSomeone';
import ICOInformation from './Pages/ICOInformation';
import Marketplace from './Pages/Marketplace';
import Home from './Pages/Home';
import Footer from './component/Footer';
import DuelReceived from './component/DuelReceived';
import  DuelAccepted  from './component/DuelAccepted';
import { Auction } from './component/Auction';



function App() {
  return (
    <div className="App">
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutRules" element={<AboutRules />} />
         <Route path="/Home" element={<Home />} />
        <Route path = "/BuyDuelCard" element = {<BuyDuelCard/>}/>
        <Route path = "/DuelSomeone" element = {<DuelSomeone/>}/>
        <Route path = "/ICOInformation" element = {<ICOInformation/>}/>
        <Route path = "/Marketplace" element = {<Marketplace/>}/>
        <Route path = "/DuelReceived" element = {<DuelReceived/>}/>
        <Route path = "/DuelAccepted" element = {<DuelAccepted/>}/>
        <Route path = "/Auction" element = {<Auction/>}/>
        </Routes>

      
      <Footer />
    </div>
    
  );
}

export default App;
