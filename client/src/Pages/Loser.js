import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Winner.css";
import axios from "axios";

export const Loser = () => {
  const { id, index } = useParams();
  const [images, setImages] = useState([]);
  const [aadil, setaadil] = useState([]);
  console.log(id);
  console.log(index);

  const getwinner = async () => {
    const res = await axios.post("/api/auth/winnerchallenge", { id: id });
    images.push(res.data[0]);
    console.log(images[0]);
    const player = `player_${index}`;
    console.log(player);

    console.log(images);

    // console.log(images[0]`.${player}`);

    if (index === "player_1") {
      images[0].player_1.map((items, i) => {
        console.log(items);
        setaadil(items.images);
      });
    }
    if (index === "player_2") {
      images[0].player_2.map((items, i) => {
        console.log(items);
        setaadil(items.images);
      });
    }
  };

  useEffect(() => {
    getwinner();
  }, [id, index]);



    return (
<>
<div className='body-main'>
      <div className='winner-sec'>
        <div className='container'>
        <div className='section-title'>
               <h2>You Lose!</h2>
               <div className='prizeimg'>
                 <img style= {{marginLeft:"60px"}} src="/Prize.png" alt="img"/> 
               <i style = {{color:"red",fontSize:"110px",position:"relative",right:"160px",top:"15px"}} class="fa fa-times" aria-hidden="true"></i>
               </div>
          </div>
          <div className='row won-main'>
            <div className='won-grid'>
            {aadil.map((items, i) => {
                console.log(items)
                return (
                  <div className="wonimg1">
                    <img src={items} alt="img" />
               <i style = {{color:"red",fontSize:"110px",position:"relative",right:"0px", bottom:"67px"}} class="fa fa-times" aria-hidden="true"></i>

                  </div>
                );
              })}
            </div>
          </div>
          <div className='won-btn'>
           <div className='btn-duel-right winnerbtn1'>
                   <button className='hero-btn'>CARD GALLERY</button>
           </div>
           <div className='btn-duel-right winnerbtn1'>
            <Link to = "/DuelSomeone">
                   <button className='hero-btn'>DUEL AGAIN</button>
            </Link>
           </div>
           <div className='btn-duel-right winnerbtn1'>
            <Link to="/Auction">
                   <button className='hero-btn'>AUCTION CARDS</button>
            </Link>
           </div>
          </div>
        </div>
        </div>
    </div>

</>

  )
}
