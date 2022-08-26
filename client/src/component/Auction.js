import React from 'react';
import './Auction.css';
import Form from 'react-bootstrap/Form';

export const Auction = () => {
 

  return (
    <div className='body-main'>
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
                                <img src="./challenge-img/1.jpg" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src="./challenge-img/2.jpg" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src="./challenge-img/3.jpg" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src="./challenge-img/4.jpg" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src="./challenge-img/5.jpg" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src="./challenge-img/6.jpg" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src="./challenge-img/7.jpg" alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src="./challenge-img/8.jpg" alt="img"/>
                                </div>                                
                        </div>

                    </div>
                    <div className='col-md-4 col-sm-4 aut-right'>
                        <div className='auction-profile'>
                        <img src="./challenge-img/1.jpg" alt="img"/>
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
                                <select class="form-select" aria-label="Floating label select example" id="id_select2_example">
                                    <option  value="Required" data-img_src="">Open this select menu</option>
                                    <option data-img_src="./Bitcoin-icon.png">BTC</option>
                                    <option data-img_src="./Bitcoin-icon.png">BTC</option>
                                    <option data-img_src="./Bitcoin-icon.png">BTC</option>
                                  </select>
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