import React from 'react';
import { Link } from 'react-router-dom';
import './Winner.css';

const Winner = () => {
  return (
    <div className='body-main'>
      <div className='winner-sec'>
        <div className='container'>
        <div className='section-title'>
               <h2>You Won!</h2>
               <div className='prizeimg'>
                 <img src="./Prize.png" alt="img"/> 
               </div>
          </div>
          <div className='row won-main'>
            <div className='won-grid'>
                <div className='wonimg1'>
                  <img src="./challenge-img/1.jpg" alt="img"/> 
                </div>
                <div className='wonimg1'>
                  <img src="./challenge-img/2.jpg" alt="img"/> 
                </div>
                <div className='wonimg1'>
                  <img src="./challenge-img/3.jpg" alt="img"/> 
                </div>
                <div className='wonimg1'>
                  <img src="./challenge-img/4.jpg" alt="img"/> 
                </div>
                
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
  )
}

export default Winner;
