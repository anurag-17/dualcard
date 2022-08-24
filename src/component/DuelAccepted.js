import React from 'react';
import './DuelAccepted.css';
import Carousel from 'react-bootstrap/Carousel';


export const DuelAccepted = () => {
  return (
    <div>
        <div className='duelacept-sec'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Duel Accepted</h2>
                </div>

                <div className='row duelat-main'>
                    <div className='col-md-5 col-sm-5'>
                       <div className='dA-left'>
                        <div className='dA-profile'>
                            <div class="clearfix">
                                    <img src="./tabicon8.png" alt="img"/>
                                    <button type="button" class="btn float-end">Estebana</button>
                            </div> 
                            <div className='dA-slider'>

                            <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./slider-1.png"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./slider-2.png"
                            alt="Second slide"
                            />

                            <Carousel.Caption>                           
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./slider-3.png"
                            alt="Third slide"
                            />

                            <Carousel.Caption>                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                            </div>
                            <div className='select-btn'>
                              <button className='hero-btn'> <span>3</span>selected</button>
                            </div>
                            <div className='btn-duel-right'>
                                    <button className='hero-btn'>Winner</button>
                             </div>
                        </div>
                        </div> 
                    </div>
                    <div className='col-md-2 col-sm-2 duelA-center'>
                       <img src="./VS icon.png" alt="img"/>
                    </div>
                    <div className='col-md-5 col-sm-5'>
                    <div className='dA-left'>
                        <div className='dA-profile'>
                        <div class="clearfix">
                                <img src="./tabicon-6.png" alt="img"/>
                                <button type="button" class="btn float-end">Estebana</button>
                         </div> 
                         <div className='dA-slider'>

                            <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./NFTimgslider-4.png"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./slider-2.png"
                            alt="Second slide"
                            />

                            <Carousel.Caption>                           
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./slider-3.png"
                            alt="Third slide"
                            />

                            <Carousel.Caption>                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                            </div>
                            <div className='select-btn'>
                              <button className='hero-btn'> <span>3</span>selected</button>
                            </div>
                            <div className='btn-duel-right'>
                                    <button className='hero-btn'>Winner</button>
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


export default DuelAccepted;