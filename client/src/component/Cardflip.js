import React from 'react'
import './Cardflip.css'
import buyimg1 from "../Edited/1.png";
import buyimg2 from "../Edited/2.png";
import buyimg3 from "../Edited/3.png";
import buyimg4 from "../Edited/4.png";
import buyimg5 from "../Edited/5.png";
import buyimg6 from "../images/6.jpg";
import shapeline from "../images/shpeline.png";

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
                   <div className='shape1'>
                     <img src={buyimg1}></img>
                     <h4>LVL 1 DUELCARD</h4>
                   </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                      <img src={shapeline}></img>
                    </div>  
                  </div>
                  <div className='col-md-4'>
                  <div className='shape2'>
                    <img src={buyimg2}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                    <div className='shap-line'>                      
                        <div ID="wrapper"> 
                        <div id="squareID" class="one">
                            <div className='shape1'>
                                <img style = {{width:"280px",position:"relative",left:"20px"}} className="one" src={buyimg2}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" class="two">
                            <div className='shape1'>
                                <img style={{position:"relative",left:"20px"}} className="two" src={buyimg1}></img>
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
                    <img src={buyimg3}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                  <div className='shap-line'>
                  <div ID="wrapper"> 
                        <div id="squareID" class="one">
                            <div className='shape1'>
                                <img style ={{width:"310px",position:"relative"}}className="one" src={buyimg3}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" class="two">
                            <div className='shape1'>
                                <img className="two" src={buyimg3}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>                        
                        <div id="squareID" class="three">
                        <div className='shape1'>
                                <img className="three" src={buyimg1}></img>
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
                    <img style={{width:"370px",position:"relative",bottom:"25px"}} src={buyimg4}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                  <div className='shap-line'>
                  <div ID="wrapper"> 
                        <div id="squareID" class="one">
                            <div className='shape1'>
                                <img  style={{width:"405px",position: "relative",bottom:"50px",right:"60px"}} className="one" src={buyimg4}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" class="two">
                            <div className='shape1'>
                                <img style={{width:"405px",position: "relative",bottom:"50px",right:"60px"}} className="two" src={buyimg4}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>                        
                        <div id="squareID" class="three">
                        <div className='shape1'>
                                <img className="three" src={buyimg1}></img>
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
                    <img style = {{width:"370px",position:"relative",right:"30px"}} src={buyimg5}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                  <div className='shap-line'>
                  <div ID="wrapper"> 
                        <div id="squareID" class="one">
                            <div className='shape1'>
                                <img style = {{width:"370px",position: "relative",top:"38px",right: "44px"}}className="one" src={buyimg5}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" class="two">
                            <div className='shape1'>
                                <img style={{marginTop:"40px",width:"370px",position:"relative",right:"44px"}} className="two" src={buyimg5}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>                        
                        <div id="squareID" class="three">
                        <div className='shape1'>
                                <img style={{marginTop:"50px"}} className="three" src={buyimg1}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                        <img style={{marginBottom:"80px"}} src={shapeline}></img>
                      </div>  
                  </div>
                  <div className='col-md-4' style={{marginTop:"50px"}}>
                  <div className='shape2'>
                    <img style = {{width:"413px",position:"relative",bottom:"55px"}} src={buyimg4}></img>
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