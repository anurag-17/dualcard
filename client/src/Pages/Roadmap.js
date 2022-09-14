import React from 'react'
import './Roadmap.css'

const Roadmap = () => {
  return (
    <div>
       <div className='roadmap-sec'>
          <div className='container'>
          <div className='section-title'>
              <h2>Roadmap</h2>
            </div>
            <div className='row roadmap-grid'>
                <div className='road-item1 first-tops'>
                <div className='yeartext'>
                  <h3>NOV <span>2022</span></h3>                  
                </div>
                <div className='map-des '>
                <p>Discord community launch Updated Whitepaper available MVP completed</p></div>
                </div>
                <div className='road-item1 second-tops'>
                <div className='yeartext'>
                  <h3>FEB <span>2023</span></h3>                  
                </div>
                <div className='map-des'>
                <p>DuelCoins Announcement Smart Contract development Whitelist alpha testing (no smart contracts)</p></div>
                </div>
                <div className='road-item1 third-sec'>
                <div className='yeartext'>
                  <h3>MAY <span>2023</span></h3>                  
                </div>
                <div className='map-des'>
                <p>Partnered Streamer Teaser Public Beta testing (w/ NFT and Smart Contracts) First DuelCoins pre-sale</p></div>
                </div>
                <div className='road-item1 fourth-sec'>
                <div className='yeartext'>
                  <h3>AUG <span>2023</span></h3>                  
                </div>
                <div className='map-des'>
                <p>Partnered streamer announcement First DuelCards challenge live on twitich.tv! Second DuelCoins Pre-sale</p></div>
                </div>
                <div className='road-item1 fifth-sec'>
                <div className='yeartext'>
                  <h3>NOV <span>2022</span></h3>                  
                </div>
                <div className='map-des'>
                <p>Live public launch and First mint event</p></div>
                </div>
            </div>
           
          </div>
        </div>
    </div>
  )
}

export default Roadmap
