import React from 'react';
import './Marketplace.css';
import Form from 'react-bootstrap/Form';

const Marketplace = () => {
  return (
    <div className='body-main'>     
      <div className='marketplace-sec'>
        <div className='container'>
           <div className='section-title'>
              <h2>Marketplace</h2>              
           </div>

           <div className='search-bar'>
            <diiv className='serch-grid'>
              <div className='search1'>
                  <div class="input-group md-form form-sm form-2 pl-0">
                <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search"/>
                <div class="input-group-append">
                  <span class="input-group-text red lighten-3" id="basic-text1"><i class="fas fa-search text-grey"
                      aria-hidden="true"></i></span>
                </div>
              </div>
              </div>
                <div className='search1'>
                <Form.Select aria-label="Default select example">
                  <option></option>
                  <option value="1">Price</option>
                  <option value="2">Price</option>
                  <option value="3">Sponsor</option>
                  <option value="3">Card Type</option>
                  <option value="3">Season Card</option>
                </Form.Select>
                </div>
            </diiv>
           </div>
           <div className='market-saerch'>
           <div className='row buydel-main'>
            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src="./challenge-img/1.jpg" alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div>

            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src="./challenge-img/2.jpg" alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div>

            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src="./challenge-img/3.jpg" alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div>

            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src="./challenge-img/4.jpg" alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div>

            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src="./challenge-img/5.jpg" alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div>

            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src="./challenge-img/6.jpg" alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
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

export default Marketplace