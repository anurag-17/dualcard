import React from 'react'
import './buyduelcard.css';
import Form from 'react-bootstrap/Form';
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"

export const CardGallery = () => {

    const userdata = JSON.parse(localStorage.getItem("nftuser"))
    console.log(userdata.wonimages)
   
  return (
    <div className=''>
    <div className='buyduelcard'>
      <div className='container'>
        <div style={{marginTop:"20px"}} className='section-title'>
           <h2>Buy Duel Card</h2>
        </div>
        <div style = {{maxWidth:"25%",display:"flex",alignItems:"center"}} className='row buydel-main'>
            {
              userdata.wonimages[0]===null?    <div className=''>
              <div style={{width:"500px",position:"relative",right:"35%"}} className='thank-sec'>
                  <div className='container'>
                      <div className='thnkct'>
                      <h1>You haven't won any challenges yet!</h1>
                          {/* <p>Your challenge has been sent</p> */}
                         <div className='thankbtn'>
          {/* <Link to = "/">
          
                          <button class="go-home hero-btn">
                              go home
                              </button>
          </Link> */}
                         </div>
                      </div>
                  </div>
              </div>
          </div>:
                userdata.wonimages.map((items,index)=>{
                    return(
                        <div className='buydue-bg'>
                        <div className='buy-cont'>
                          <div className='buyduel-img'>
                            <img src={items} alt="img"/> 
                          </div>
                          {/* <div className='buy-newimg'>
                            <div className='buy-new1'> <img src="/Binancelogo.png" alt="img"/></div>
                            <div className='buy-new1'> <img src="/WalletConnectlogo.png" alt="img"/></div>
                            <div className='buy-new1'> <img src="/MetaMasklogo.png" alt="img"/></div>
                          </div> */}
                          {/* <div className='name-form'>
                          <Form.Group className="">
                             <Form.Control placeholder="Name"  />
                             </Form.Group>
                          </div> */}
                          <div className='btn-duel-right'>
                             <button style={{marginBottom:"0px"}} className='hero-btn'>BUY NOW</button>
                           </div>
                        </div>
                      </div>
                    )
                })
            }
       
{/* 
          <div className='buydue-bg'>
            <div className='buy-cont'>
              <div className='buyduel-img'>
                <img src={img2} alt="img"/> 
              </div>
              <div className='buy-newimg'>
                <div className='buy-new1'> <img src="/Binancelogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/WalletConnectlogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/MetaMasklogo.png" alt="img"/></div>
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
                <img src={img3} alt="img"/> 
              </div>
              <div className='buy-newimg'>
                <div className='buy-new1'> <img src="/Binancelogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/WalletConnectlogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/MetaMasklogo.png" alt="img"/></div>
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
                <img src={img4} alt="img"/> 
              </div>
              <div className='buy-newimg'>
                <div className='buy-new1'> <img src="/Binancelogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/WalletConnectlogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/MetaMasklogo.png" alt="img"/></div>
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
                <img src={img5} alt="img"/> 
              </div>
              <div className='buy-newimg'>
                <div className='buy-new1'> <img src="/Binancelogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/WalletConnectlogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/MetaMasklogo.png" alt="img"/></div>
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
                <img src={img6} alt="img"/> 
              </div>
              <div className='buy-newimg'>
                <div className='buy-new1'> <img src="/Binancelogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/WalletConnectlogo.png" alt="img"/></div>
                <div className='buy-new1'> <img src="/MetaMasklogo.png" alt="img"/></div>
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
          </div> */}
        </div>
      </div>
    </div>
  </div>
  )
}
