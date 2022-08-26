import logo from './logo.svg';
import './App.css';
import { Login } from './component/Login';
import { Register } from './component/Register';
import {Routes,Route, Navigate} from "react-router-dom"
import { Dashboard } from './component/Dashboard/Dashboard';
import Home from './Pages/Home';
import Header from "./component/Header"
import Footer from "./component/Footer"
import BuyDuelCard from "./Pages/BuyDuelCard"
import DuelSomeone from "./Pages/DuelSomeone"
import DuelChallenge from './Pages/DuelChallenge';
import ICOInformation from "./Pages/ICOInformation"
import Marketplace from "./Pages/Marketplace"
import DuelReceived from "./component/DuelReceived"
import DuelAccepted from "./component/DuelAccepted"
import Auction from "./component/Auction"
import { Thankyou } from './Thankyou';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/profile" element={<Dashboard/>}/>
        <Route path = "/BuyDuelCard" element = {<BuyDuelCard/>}/>
        <Route path = "/DuelSomeone" element = {<ProtectedRoute><DuelChallenge/></ProtectedRoute>}/>
        <Route path = "/ICOInformation" element = {<ICOInformation/>}/>
        <Route path = "/Marketplace" element = {<Marketplace/>}/>
        <Route path = "/DuelReceived" element = {<DuelReceived/>}/>
        <Route path = "/DuelAccepted" element = {<DuelAccepted/>}/>
        <Route path = "/Auction" element = {<Auction/>}/>
        <Route path = "/Thankyou" element = {<Thankyou/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}


export function ProtectedRoute(props){

  if(!localStorage.getItem("nftuser"))
  {
    <Navigate to="/register"/>
  }else{
    return props.children
  }

}

export default App;
