import React from 'react';
import './Duelsystem.css';
import buyimg1 from "../images/1.jpg";
import buyimg2 from "../images/2.jpg";
import buyimg3 from "../images/3.jpg";
import buyimg4 from "../images/4.jpg";
import buyimg5 from "../images/5.jpg";
import buyimg6 from "../images/6.jpg";
import shapeline from "../images/shpeline.png";
import Cardflip from './Cardflip';

const Duelsystem = () => {
  return (
    <div className='body-main'>
      <div className='duel-syestem-sec'>
        <div className='container'>
           <div className='section-title'>
              <h2>Duel Challenge System</h2>               
           </div>
           <Cardflip />          
           <div className='row'>
               <div className='section-title'>
                  <h2>Basic Dueling With L1 And L2 Duelcard Nft's</h2>   
              </div>
              <div className='basic-des'>
              <p>L1 Duelcards Are Minted On The Site And Each Of Our Partnered Streamers Will Have New Cards Each 
                Season Catered To Their Artist Design And Branding.</p>   
                <p>L2 Duelcards Will Be Minted In A Very Limited Supply. Half For Public Auction 
                  And The Other Half Transferred To The Partner's Wallet </p>         
                  <p>Maltiple Duelcard Nft's Can Be Wagered On A Duel As Long As The Minimum Challenge Requirements Have Been Met. Streamers Will Most Likely Request That A Minimum Number Of L1 Nft's Is Needed To Challenge.</p>
           
              </div>
              </div>
               <div className='row challangeAmain'>
                <div className='challangeA'>
                     <div className='challengeselect1'>
                       <div className='chalangeitem1'>
                            <div className='select-btn'>
                              <button className='hero-btn'>CHALLENGER  <span>A</span></button>
                            </div>
                            <div className='Aimg'>
                            <img src={buyimg4}></img>
                            </div>
                         
                       </div>
                       <div className='chalangeitem1'>
                            <div className='select-btn'>
                              <button className='hero-btn'> CHALLENGER <span>B</span></button>
                            </div>
                            <div className='Aimg'>
                            <img src={buyimg4}></img>
                            </div>
                         
                       </div>
                      </div> 
                </div>
              </div>
              <div className='sele-main container-fluid'>
              <div className='winnweaccout1'>
                  <div className='winneritem1'>
                    <div className='winnwect'>
                      <h3>Handshake Agreement On Duelcards.Io</h3>
                      <p>Challenger A Accepts Challenger B’s Duel Offer</p>
                      <span> (Hyperlink To Challenge Rules)</span>
                    </div>
                  </div>

                  <div className='winneritem1'>
                    <div className='winnwect'>
                      <h3>NFT Escrow Account</h3>
                      <div className='accout-grid'>
                        <div className='accout-img1'>
                          <img src={buyimg4}></img>
                        </div>
                        <div className='accout-line'>
                          <h5>+</h5>
                        </div>
                        <div className='accout-img1'>
                          <img src={buyimg5}></img>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='winneritem1'>
                    <div className='winnwect'>
                      <h3>Winner</h3>
                      <div className='accout-grid'>
                        <div className='accout-img1'>
                          <img src={buyimg4}></img>
                        </div>
                        
                        <div className='accout-img1'>
                          <img src={buyimg5}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div> 
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Duelsystem;