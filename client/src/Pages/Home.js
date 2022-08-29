import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div>
      <div className='card-section'>
        <div className='container'>
          <div className='row card-main'>
            <div className='col-lg-6 col-md-6'>
              <div className='card-cont'>
                <h2>Buy. Win. Profit.</h2>
                <p>We provide Limited Edition of L1 DuelCards designed by Content Creators. Buy the L1 DuelCards and get a chance to win more NFTs by challenging your favorite content creator to a Duel. Sell your NFT cards and make profits through the marketplace!</p>
                <p>We bridge the gap between you and the content creator, we keep your cards safe in an escrow hold while you challenge, 
                  play, win and sell your cards!</p>
                 <div className='btn-main'>
                 <button className='hero-btn'>Contact btn</button>
                 </div>
              </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='card-img'>
                  <img src="./hero-right.png" alt="img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-section">
          <div className='container'>
            <div className='section-title'>
              <h2>How It Works</h2>
              <p>Purchase a Level 1 DuelCard or a Universal DuelCard and start challenging other players for a chance to win their NFTs!</p>
            </div>
            <div className='video-section'>           
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/L6dYyye5a2M" title="DuelCards VO Synced02" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div className='buy-section'>
          <div className='container'>
            <div className='section-title'>
              <h2>Buy L1 Duel Card</h2>
              <p>Challenge, Win and Sell</p>
            </div>
            <div className='buy-grid'>
              <div className='buy-item1'>
                <div className='buy-ct'>
                  <h3>Level 2 Streamer Duel Card</h3>
                    <div className='buy-img'>
                      <Link to = "/shop-streamer">
                       <img src="./NFT img.png" alt="img"/>
                      </Link>
                     </div>
                     <p>These cards are collaboratively designed with your favorite 
                        Content creators!</p>
                </div>
              </div>

              <div className='buy-item1'>
                <div className='buy-ct'>
                  <h3>Seasonal Cards</h3>
                    <div className='buy-img'>
                    <Link to = "/shop-seasonal">
                       <img src="./NFT img2.png" alt="img"/>
                   </Link>
                     </div>
                     <p>These cards won’t be around long, so grab them while you can.</p>
                </div>
              </div>
              <div className='buy-item1'>
                <div className='buy-ct'>
                  <h3>Universal Duel Cards</h3>
                    <div className='buy-img'>
<Link to ="/shop-universal">
                       <img src="./NFT img3.png" alt="img"/>
</Link>
                     </div>
                     <p>Universal cards allow you to challenge any streamer for their L2 DuelCard.!</p>
                </div>
              </div>
            </div>

          
            <div className='btn-buy'>
              <Link to = "/BuyDuelCard">
                 <button className='hero-btn'>Buy   Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='marketpl-sec'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-4'>
                <div className='markt-img'>
                <img src="./marketplace.png" alt="img"/>
                </div>
              </div>
              <div className='col-lg-8 col-md-8'>
                <div className='markt-cont'>
                  <h2>NFT Marketplace</h2>
                  <div className='row mt-main'>
                    <div className='col-md-4 mart-img2'>
                      <img src="./marketplac2.png" alt="img"/>
                    </div>
                    <div className='col-md-8' >
                      <div className='mart-ct'>
                      <h3>Auction Your Card</h3>
                      <p>Sell your L2 Duelcards on auction and keep the profits.</p>
                      <div className='btn-market'>
                        <Link to ="/Leaderboard">
                        <button className='hero-btn'>Show more </button>
                        </Link>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container market-item1'>
            <div className='row'>              
              <div className='col-lg-8 col-md-8'>
                <div className='markt-cont'>                 
                  <div className='row mt-main'>                   
                    <div className='col-md-8' >
                      <div className='mart-ct'>
                      <h3>Leaderboards</h3>
                      <p>Know who is leading and atop the chart with the most NFT Duelcards in possession.</p>
                      <div className='btn-market'>
                      <Link to ="/Leaderboard">
                        <button className='hero-btn'>Show more </button>
                        </Link> 
                      </div>
                      </div>
                    </div>
                    <div className='col-md-4 mart-img2'>
                      <img src="./marketplace4.png" alt="img"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4'>
                <div className='markt-img'>
                <img src="./marketplace3.png" alt="img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Challenge-sec'>
         <div className='container'>
         <div className='section-title'>
              <h2>Challenge to Win</h2>
              <p>Challenge your favorite Twitch streamer with your L1 Duelcard for their uniquely designed and rare L2 Duelcard. You stand a chance to win 1 out of 5 of your favorite streamer’s rare, unique, and special L2 cards. Sell your newly won L2 Duelcards on auction and get
                 to keep the profits.</p>
           </div>
           <div className='search-bar'>
           <div class="input-group md-form form-sm form-2 pl-0">
            <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search"/>
            <div class="input-group-append">
              <span class="input-group-text red lighten-3" id="basic-text1"><i class="fas fa-search text-grey"
                  aria-hidden="true"></i></span>
            </div>
          </div>
           </div>
           <div className='tab-challange'>
          
            <div className='tab-section'> 
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active tab-btn" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">  <img src="./User_avatar.png" alt="img"/> Laurie</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Stephen" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-2.png" alt="img"/> Stephen</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-3.png" alt="img"/> Nick</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-4.png" alt="img"/> Judith</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-5.png" alt="img"/> Andrea</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-6.png" alt="img"/> Albert</button>
                        </li>
                        {/* <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-7.png" alt="img"/> Ernest</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon8.png" alt="img"/> Estebana</button>
                        </li>
                        
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon9.png" alt="img"/> Carly</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon10.png" alt="img"/> Steve</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon11.png" alt="img"/> Andrina</button>
                        </li>                        */}
                    </ul>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                         <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-7.png" alt="img"/> Ernest</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon8.png" alt="img"/> Estebana</button>
                        </li>
                        
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon9.png" alt="img"/> Carly</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon10.png" alt="img"/> Steve</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon11.png" alt="img"/> Andrina</button>
                        </li>                       
                    </ul>
                    <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className='tab-cont'>
                        <p>Estebana</p>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='tab-grid'>
                              <div className='tab-item1'>
                              <img src="./marketplace3.png" alt="img"/>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="Stephen" role="tabpanel" aria-labelledby="profile-tab">
                    <div className='tab-cont'>
                        <p>Stephen</p>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='tab-grid'>
                              <div className='tab-item1'>
                              <img src="./marketplace3.png" alt="img"/>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>                            
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
              </div>
              <div className='btn-tb2'>
                 <button className='hero-btn'>Commence Challenge</button>
             </div>
           </div>
         </div>
        </div>


        <div className='rule-sec'>
          <div className='container'>
          <div className='section-title'>
              <h2>Rules / About</h2>
            </div>
            <div className='row rule-main1'>
              <div className='col-md-5 rule-img'>
                <img src="./rule-img1.png" alt="img"/>
              </div>
              <div className='col-md-7'>
                <div className='rule-ct'>
                  <h3>Rules</h3>
                  <p>The two contestants would submit their NFTs to the escrow account before beginning the challenge. Once the terms are agreed upon, the Duel begins!</p>
                 <p>Once the challenge is completed, the contestants would go to the webpage, verify their identity, the winner is confirmed and the NFTs will be released to the winner from the escrow account. The challenge happens off network.</p>
                     <div className='btn-rule'>
                      <Link to ="/AboutRules">
                        <button className='hero-btn'>Learn more </button>
                      </Link>
                   </div>
                </div>
              </div>
            </div>
            <div className='row rule-main2'>
              <div className='col-md-6 rule-img2'>
                <img src="./nefti-img21.png" alt="img"/>
              </div>
              <div className='col-md-6'>
                <div className='rule-ct'>
                  <h3>Rules</h3>
                  <p>The two contestants would submit their NFTs to the escrow account before beginning the challenge. Once the terms are agreed upon, the Duel begins!</p>
                 <p>Once the challenge is completed, the contestants would go to the webpage, verify their identity, the winner is confirmed and the NFTs will be released to the winner from the escrow account. The challenge happens off network.</p>
                     <div className='btn-rule'>
                      <Link to="/AboutRules">
                        <button className='hero-btn'>Show more</button>
                      </Link>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='info-sec'>
          <div className='container'>
            <div className='row info-main'>
              <div className='col-md-6'>
                <div className='inf-ct'>
                  <h4>ICO Information</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                     sanctus est Lorem ipsum dolor sit amet.</p>
                     <div className='btn-rule'>
                      <Link to = "/ICOInformation">
                        <button className='hero-btn'>Show more</button>
                      </Link>
                   </div>
                </div>
              </div>
              <div className='col-md-6 rule-img3'>
              <div className='nft-img'>
              <img src="./NFT-img.png" alt="img"/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home