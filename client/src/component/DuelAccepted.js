import React, { useState, useEffect } from "react";
import "./DuelAccepted.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios"; 
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "./Loader";

export const DuelAccepted = () => {
  const navigate = useNavigate()
  const [challengedata, setchallengedata] = useState([]);
  const [challengeid, setChallengeId] = useState("");
  const [loader, setLoader] = useState(true);
  const [userimagedata, setuserimagedata] = useState([]);
  const data = JSON.parse(localStorage.getItem("nftuser"));
  const id = data._id;

  const getrecieved = async () => {
    console.log(id);
    const res = await axios.post("/api/auth/recievedchallenge", {
      id: id,
      Accept:true,
      result:"pending"
    });
    const newres = await axios.post("/api/auth/challengedata", {
      id: id,
      Accept:true,
      result:"pending"
    });

    console.log(res);
    res.data.map((items, index) => {
      console.log(items);
      console.log(items._id);
      setChallengeId(items._id);
    });
    setchallengedata([...res.data, ...newres.data]);
    console.log(challengedata);

    
  };
  
  async function getimages() {
    const data = JSON.parse(localStorage.getItem("nftuser"));

    const res = await axios.post("/api/auth/getdata", data).then((data) => {
      setuserimagedata(data.data);
    });
  }
  getimages();

  useEffect(() => {
    // getacceptedchallenge()
    getrecieved();
  },[]);

  setTimeout(() => {
    setLoader(false);
  },1800);

  const handlewin= (e)=>{
    setLoader(true)
    const res = axios.put("/api/auth/winnerstatus",{id:challengeid,result:"declare"})
if(res){
setLoader(false)
  navigate(`/winner/${e.target.name}/player_${e.target.value}`)
}
console.log(e.target.name)
console.log(e.target.value)
  }

  const handlelose  = (e)=>{
    setLoader(true)
    const res = axios.put("/api/auth/winnerstatus",{id:challengeid,result:"declare"})
    if(res){
setLoader(false)
      navigate(`/loser/${e.target.name}/player_${e.target.value}`)
    }
    console.log(e.target.name)
    console.log(e.target.value)
  }

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="duelacept-sec">
          <div className="container">
            <div className="section-title">
              <h2 className="body-main">Duel Accepted</h2>
            </div>

            <div className="row duelat-main">
              {challengedata.map((items, index) => {
                console.log(items.player_2[0].name)
                return (
                  <>
        
                  <h1 style ={{color:"white",textAlign:"center",marginTop:"80px",marginBottom:"20px"}}>Challenge{index+1}</h1>
                    <div className="col-md-5 col-sm-5">
                      <div className="dA-left">
                        <div className="dA-profile">
                          <div class="clearfix">
                            <img src="/tabicon8.png" alt="img" />
                            <button type="button" class="btn float-end">
                              {items.player_1[0].name}
                             <span style ={{color:"white",textAlign:"right",marginLeft:"40px",marginBottom:"20px"}}>Challenger</span>

                            </button>
                          </div>
                          <div className="dA-slider">
                            <Carousel>
                              {items.player_1[0].images.map((items, index) => {
                            
                                return (
                                  <Carousel.Item>
                                    <img
                                      className="d-block w-100"
                                      src={items}
                                      alt="First slide"
                                    />
                                  </Carousel.Item>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="select-btn">
                            <button className="hero-btn">
                              {" "}
                              <span>{items.player_1[0].images.length}</span>
                              selected
                            </button>
                          </div>
                        </div>
                      </div>
                          
                    </div>
                    <div className="col-md-2 col-sm-2 duelA-center">
                      <img src="/VS icon.png" alt="img" />
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <div className="dA-left">
                        <div className="dA-profile">
                          <div class="clearfix">
                            <img src="/tabicon-6.png" alt="img" />
                            <button type="button" class="btn float-end">
                              {items.player_2[0].name}
                             <span style ={{color:"white",textAlign:"right"}}>Reciever</span>
                            </button>
                          </div>
                          <div className="dA-slider">
                            <Carousel>
                              {items.player_2[0].images.map((items, index) => {
                                return (
                                  <Carousel.Item>
                                    <img
                                      className="d-block w-100"
                                      src={items}
                                      alt="First slide"
                                    />
                                    <Carousel.Caption></Carousel.Caption>
                                  </Carousel.Item>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="select-btn">
                            <button className="hero-btn">
                              {" "}
                              <span>{items.player_2[0].images.length}</span>selected
                            </button>
                          </div>
                          <div className="btn-duel-right winner-btn">
                            {/* <Link to="/winner"> */}
                              {/* <button value="1" name ={items._id} onClick={handlewin} className="hero-btn">Winner</button> */}
                            {/* </Link> */}
                            {/* <Link to="/loser"> */}
                              {/* <button value="2" name = {items._id} onClick={handlelose} className="hero-btn">Loser</button> */}
                            {/* </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-duel-right winner-btn">
                      {id === challengedata[0].player_1_id ? (<>
                        <button value="2" name={items._id} onClick={handlewin} className="hero-btn">Winner</button>
                        <button onClick={handlelose} value="1" name={items._id} className="hero-btn">Loser</button></>) : ("")}

                      {id === challengedata[0].player_2_id ? (<>
                        <button value="1" name={items._id} onClick={handlewin} className="hero-btn">Winner</button>
                        <button value="2" name={items._id} onClick={handlelose} className="hero-btn">Loser</button>

                      </>
                      ) : ("")}
                      </div>
                  </>
                      );
                    })}
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DuelAccepted;
