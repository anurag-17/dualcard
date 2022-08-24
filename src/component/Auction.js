import React from 'react';
import './Auction.css';
import Form from 'react-bootstrap/Form';

export const Auction = () => {
  return (
    <div>
        <div className='auction-sec'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Auction</h2>
                </div>
                <div className='row auction-row'>
                    <div className='col-md-8 col-sm-8 aut-left'>
                        <div className='aut-head'>
                            <h4>Select the card you want to auction</h4>
                        </div>
                        <div className='auction-grid'>
                                <div className='auction-img1'>
                                  <img src="./auctionimg/auction-img1.png" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                  <img src="./auctionimg/auction-img2.png" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                  <img src="./auctionimg/auction-img3.png" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                  <img src="./auctionimg/auction-img4.png" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                  <img src="./auctionimg/auction-img5.png" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                  <img src="./auctionimg/auction-img6.png" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                  <img src="./auctionimg/auction-img7.png" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                  <img src="./auctionimg/auction-img8.png" alt="img"/>
                                </div>                                
                        </div>

                    </div>
                    <div className='col-md-4 col-sm-4 aut-right'>
                        <div className='auction-profile'>
                          <img src="./auctionimg/auction-img1.png" alt="img"/>
                        </div>
                        <div className='auction-ct'>
                            <div class='actprize-btn1'>
                                <h5>Price</h5>
                                <Form.Group className="mb-3">
                                <Form.Control placeholder="starting price"  />
                            </Form.Group>
                            </div>
                            <div class='actprize-btn1'>
                                <h5>currency</h5>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">BTC</option>
                                    <option value="2">BTC</option>
                                    <option value="3">BTC</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='btn-duel-right'>
                              <button className='hero-btn'>Winner</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auction;