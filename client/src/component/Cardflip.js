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
                                <img style = {{width:"300px",position:"relative",left:"15px"}} className="one" src={buyimg2}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" class="two">
                            <div className='shape1'>
                                <img style={{position:"relative",left:"15px"}} className="two" src={buyimg1}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                     <div className='systemct'>
                      <img  style = {{position:"relative",right:"30px"}} src={shapeline}></img>
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
                                <img style ={{width:"330px",position:"relative",top:"10px"}}className="one" src={buyimg3}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" class="two">
                            <div className='shape1'>
                                <img style = {{position:"relative",top:"10px"}} className="two" src={buyimg3}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>                        
                        <div id="squareID" class="three">
                        <div className='shape1'>
                                <img style =  {{position:"relative",top:"10px",left:"5px"}} className="three" src={buyimg1}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                      <img  style = {{position:"relative",right:"30px"}} src={shapeline}></img>
                    </div>  
                  </div>
                  <div className='col-md-4'>
                  <div style = {{width:"400px",position:"relative",bottom:'25px',right:"20px"}} className='shape2'>
                    <img  src={buyimg4}></img>
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
                            <div style = {{position:"relative",bottom:"118px"}} className='shape1'>
                                <img  style={{width:"390px",position: "relative",right:"28px",top:"8px"}} className="one" src={buyimg4}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" class="two">
                            <div style = {{position:"relative",bottom:"100px"}} className='shape1'>
                                <img style={{width:"390px",position: "relative",right:"28px",top:"-5px"}} className="two" src={buyimg4}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>                        
                        <div id="squareID" class="three">
                        <div   className='shape1'>
                                <img style={{position:"relative",left:"15px",bottom:"68px"}} className="three" src={buyimg1}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                        <img style = {{position:"relative",bottom:"95px",right:"29px"}} src={shapeline}></img>
                      </div>  
                  </div>
                  <div className='col-md-4'>
                  <div style = {{width:"375px",position:"relative",right:"30px",bottom:"85px"}} className='shape2'>
                    <img  src={buyimg5}></img>
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
                                <img style = {{width:"380px",position: "relative",bottom:"120px",right: "54px"}}className="one" src={buyimg5}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" class="two">
                            <div className='shape1'>
                                <img style={{bottom:"120px",width:"380px",position:"relative",right:"54px"}} className="two" src={buyimg5}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>                        
                        <div id="squareID" class="three">
                        <div className='shape1'>
                                <img style={{position:"relative",bottom:"100px"}} className="three" src={buyimg1}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                        <img style= {{position:"relative",bottom:"160px",right:"30px"}} src={shapeline}></img>
                      </div>  
                  </div>
                  <div className='col-md-4'>
                  <div  style = {{width:"390px",position:"relative",bottom:"140px",right:"25px"}} className='shape2'>
                    <img src={buyimg4}></img>
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