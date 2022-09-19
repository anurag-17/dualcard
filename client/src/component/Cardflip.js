import React from 'react'
import './Cardflip.css'
import buyimg1left from "../images/row1-left-card.svg";
import buyimg2right from "../images/row1-right-card.svg";

import secondleft from "../images/row2-left-card.svg";
import secondright from "../images/row2-right-card.svg";

import thirdleft from "../images/third-left-card.svg";
import thirdright from "../images/row3-right-card.svg";


import row4left from "../images/row4-left-card.svg";
import row4right from "../images/row4-right-card.svg";

import fifthleft from "../images/row5-left-card.svg";
import fifthrights from "../images/fifth-right.svg";




import shapeline from "../images/arrow-white.svg";

const Cardflip = () => {
  return (
    <div>
        <div className='card-flip' id="card-flip">
        <div className='container'>
             <div className='row'>
            <div className='challengesys-grid'>

              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                   <div className='shape1 dual-first'>
                     <img src={buyimg1left}></img>
                     <h4>Lvl 1 DuelCard</h4>
                   </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                      <img src={shapeline}></img>
                    </div>  
                  </div>
                  <div className='col-md-4'>
                  <div className='shape2'>
                    <img src={buyimg2right}></img>
                    <h4>Lvl 1 DuelCard</h4>
                    </div>
                  </div>
                </div>
              </div>


              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                    <div className='shap-line'>                      
                        <div id="wrapper"> 
                        <div id="squareID" className="one">
                            <div className='shape1 dualsecond'>
                                <img  className="one" src={secondleft}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                       
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                     <div className='systemct'>
                      <img src={shapeline}></img>
                    </div>  
                  </div>
                  <div className='col-md-4'>
                  <div className='shape2'>
                    <img src={secondright}></img>
                    <h4>LVL 1</h4>
                    </div>
                  </div>
                </div>
              </div>


              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                  <div className='shap-line'>
                  <div id="wrapper"> 
                        <div id="squareID" className="one">
                            <div className='shape1'>
                                <img  className="one" src={thirdleft}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                       
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                      <img src={shapeline}></img>
                    </div>  
                  </div>
                  <div className='col-md-4'>
                  <div className='shape2'>
                    <img src={thirdright}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>


              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                  <div className='shap-line'>
                  <div id="wrapper"> 
                        <div id="squareID" className="one">
                            <div className='shape1'>
                                <img  className="one" src={row4left}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                    
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                        <img src={shapeline}></img>
                      </div>  
                  </div>
                  <div className='col-md-4'>
                  <div className='shape2'>
                    <img src={row4right}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>


              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                  <div className='shap-line'>
                  <div id="wrapper"> 
                        <div id="squareID" className="one">
                            <div className='shape1'>
                                <img  className="one" src={fifthleft}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                   
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                        <img src={shapeline}></img>
                      </div>  
                  </div>
                  <div className='col-md-4'>
                  <div className='shape2'>
                    <img src={fifthrights}></img>
                    <h4>LVL 1 DUELCARD</h4>
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

export default Cardflip;