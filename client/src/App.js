import './App.css';
import { Login } from './component/Login';
import { Register } from './component/Register';
import {Routes,Route, Navigate} from "react-router-dom"
import { Dashboard } from './component/Dashboard/Dashboard';
import Home from './Pages/Home';
import Header from "./component/Header"
import Footer from "./component/Footer"
import BuyDuelCard from "./Pages/BuyDuelCard"
import DuelSomeone from './component/DuelSomeone';
import ICOInformation from "./Pages/ICOInformation"
import Marketplace from "./Pages/Marketplace"
import DuelReceived from "./component/DuelReceived"
import DuelAccepted from "./component/DuelAccepted"
import Auction from "./component/Auction"
import Winner from "./Pages/Winner"
import Leaderboard from "./Pages/Leaderboard"
import AboutRules from "./Pages/AboutRules"
import  Thankyou from './Thankyou';
import ShopStreamer from './component/ShopStreamer';
import ShopUniversal from './component/ShopUniversal';
import ShopSeasonal from './component/ShopSeasonal';
import Contactus from './Pages/Contactus';
import { DuelStatus } from './Pages/DuelStatus';
import Pathtolevel from './Pages/Pathtolevel';
import { Loser } from './Pages/Loser';
import Duelsystem from './component/Duelsystem';
import { ChallengeMarket } from './component/ChallengeMarket';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/login" element={<PrivateRoute><Login/></PrivateRoute>}/>
        <Route path ="/register" element={<PrivateRoute><Register/></PrivateRoute>}/>
        <Route path ="/profile" element={<Dashboard/>}/>
        <Route path = "/BuyDuelCard" element = {<BuyDuelCard/>}/>
        <Route path = "/winner/:id/:index" element = {<Winner/>}/>
        <Route path = "/loser/:id/:index" element = {<Loser/>}/>
        <Route path = "/DuelSomeone" element = {<ProtectedRoute><DuelSomeone/></ProtectedRoute>}/>
        <Route path = "/ICOInformation" element = {<ICOInformation/>}/>
        <Route path = "/AboutRules" element = {<AboutRules/>}/>
        <Route path = "/Marketplace" element = {<Marketplace/>}/>
        <Route path = "/DuelReceived" element = {<ProtectedRoute><DuelReceived/></ProtectedRoute>}/>
        <Route path = "/DuelAccepted" element = {<DuelAccepted/>}/>
        <Route path = "/Auction" element = {<Auction/>}/>
        <Route path = "/leaderboard" element = {<Leaderboard/>}/>
        <Route path = "/thankyou" element = {<Thankyou/>}/>
        <Route path = "/shop-streamer" element = {<ShopStreamer/>}/>
        <Route path = "/shop-universal" element = {<ShopUniversal/>}/>
        <Route path = "/shop-seasonal" element = {<ShopSeasonal/>}/>
        <Route path = "/contact-us" element = {<Contactus/>}/>
        <Route path = "/duelstatus" element = {<ProtectedRoute><DuelStatus/></ProtectedRoute>}/>
        <Route path = "/pathtolevel" element = {<Pathtolevel/>}/>
        <Route path = "/duelsystem" element = {<Duelsystem/>}/>
        {/* <Route path = "/duelmarket" element = {<ChallengeMarket/>}/> */}
      </Routes>
    <Footer/>
    </div>
  );
}


export function ProtectedRoute(props){

  const userdata = localStorage.getItem("nftuser")

  if(userdata)
  {
    return props.children
  }else{
   return <Navigate to="/login"/>
  }

}



export function PrivateRoute(props){
  if(!localStorage.getItem("nftuser")){
    return props.children
  }else{
    return <Navigate to ="/DuelSomeone"/>
  }
}
export default App;
