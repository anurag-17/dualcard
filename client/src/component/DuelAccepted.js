import React, { useState, useEffect } from "react";
import "./DuelAccepted.css";
import axios from "axios"; 
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import {Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


export const DuelAccepted = () => {
  const navigate = useNavigate()
  const [challengedata, setchallengedata] = useState([]);
  const [challengeid, setChallengeId] = useState("");
  const [loader, setLoader] = useState(true);
  const data = JSON.parse(localStorage.getItem("nftuser"));
  const id = data._id;

  const getrecieved = async () => {
    const newres = await axios.post("/api/auth/challengedata", {
      id:id,
      Accept:true,
      result:"pending"
    });
    if(newres){
      setLoader(false)
    }
    setchallengedata(newres.data);

    newres.data.map((items, index) => {
      setChallengeId(items._id);
    });

  };
  useEffect(() => {
    getrecieved();
  },[]);


  const handlewin= (e)=>{
    setLoader(true)
    const res = axios.put("/api/auth/winnerstatus",{id:challengeid,result:"declared"})
if(res){
setLoader(false)
  navigate(`/winner/${e.target.name}/player_${e.target.value}`)
}
  }

  const handlelose  = (e)=>{
    setLoader(true)
    const res = axios.put("/api/auth/winnerstatus",{id:challengeid,result:"declared"})
    if(res){
setLoader(false)
      navigate(`/loser/${e.target.name}/player_${e.target.value}`)
    }
  }
  return (
    <div>
     
        <div className="duelacept-sec">
          <div className="container">
            <div className="section-title">
              <h2 className="body-main">Duel Accepted</h2>
            </div>
            {loader ? (
        <Loader />
      ) : (
            <div className="row duelat-main">
              {challengedata.map((items, index) => {
                return (
                  <>
                  <h1 style ={{color:"white",textAlign:"center",marginTop:"80px",marginBottom:"20px"}}>Challenge{index+1}</h1>
                    <div className="col-md-5 col-sm-5">
                      <div className="dA-left">
                        <div className="dA-profile">
                          <div class="clearfix">
                            <button type="button" class="btn float-end">
                            <img style={{marginRight:"8px"}} src="/tabicon8.png" alt="img" />
                              {items.player_1[0].name}
                            </button>
                            <span style ={{color:"white",marginRight:"10px"}}>Challenger</span>
                          </div>
                          <div className="dA-slider">

                          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

{items.player_1[0].images.map((items, index) => {
                                return (
                                  <SwiperSlide>
                                    <img
                                      className="d-block w-100"
                                      src={items}
                                      alt="First slide"
                                    />
                                    </SwiperSlide>
                                );
                              })}
       
      </Swiper>

                          
                          </div>
                          <div className="select-btn">
                            <button className="hero-btn" style={{zIndex:1}}>
                              {" "}
                              <span >{items.player_1[0].images.length}</span>
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
                            <button type="button" class="btn float-end">
                            <img style={{marginRight:"8px"}} src="/tabicon9.png" alt="img" />
                              {items.player_2[0].name}
                            </button>
                            <span style ={{color:"white",marginRight:"10px"}}>Reciever</span>
                          </div>
                          <div className="dA-slider">
                          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

{items.player_2[0].images.map((items, index) => {
                                return (
                                  <SwiperSlide>
                                    <img
                                      className="d-block w-100"
                                      src={items}
                                      alt="First slide"
                                    />
                                    </SwiperSlide>
                                );
                              })}
       
      </Swiper>
                          </div>
                          <div className="select-btn">
                            <button style = {{zIndex: 1}} className="hero-btn">
                              {" "}
                              <span >{items.player_2[0].images.length}</span>selected
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
            )}
            
          </div>
        </div>
    </div>
  );
};

export default DuelAccepted;
