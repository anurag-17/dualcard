import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './DuelChallenge.css';

const DuelChallenge = () => {
  const [image,setImage] = useState("")
  const [url,setUrl] = useState("")
  const [arr,setArr] = useState([])
    const [imgdata, setImgdata] = useState({
    url:"",
    userId:"",
  });
  const [userdata,setUserdata] = useState([])
  const [userId, setUserId] = useState("");
  const [userprofiledata, setUserprofiledata] = useState([]);
  const [show, setShow] = useState(false);




  const handleClose = () =>{
    setShow(false);


  }
  const handleShow = () => setShow(true);


  const getuserdata = async()=>{
    const res = await axios.get("http://localhost:5000/api/auth/getuserdata")
    setUserdata(res.data)
  }
  
  
  const handleupload = async(e)=>{
    console.log(e.target.value)

const files = e.target.files[0]
setImage(files)
const userdata = JSON.parse(localStorage.getItem("nftuser"))
setUserprofiledata([userdata]);
setUserId(userdata.user._id);
  }


const handlesubmit = async()=>{
  let data = new FormData()
  data.append("file",image)
  data.append("upload_preset","nftimg")
  data.append("cloud_name","degu3b9yz")
  
  await fetch("https://api.cloudinary.com/v1_1/degu3b9yz/image/upload", {
    method: "POST",
    body: data,
  }).then((res)=>res.json()).then((data)=>{
  const imgUrl = data.url
  setUrl(data.url)
  arr.push(imgUrl)
  imgdata.userId = userId;
  imgdata.url = url;

  console.log(imgdata)
  
}).catch((err)=>{
  console.log(err)
})

if (url) {
  fetch("http://localhost:5000/upload",{
    method: "POST",
    headers:{
      "Content-Type":"Application/Json",
    },
    body:JSON.stringify(imgdata),
  });
}

setShow(false);
}

useEffect(()=>{
  getuserdata()
},[])

return (
  <div>
        <div className='duelchalenge-sec'>
            <div className='container'>
               <div className='section-title'>
                    <h2>Commence Duel/Challenge</h2>
                </div>
                <div className='row'>
                <div className='tab-challange'>
          
                <div className='tab-section'> 
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {
                      userdata.map((items,index)=>{
                        return(
                      <li className="nav-item" role="presentation">
                          <button className="nav-link active tab-btn" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">  <img src="./User_avatar.png" alt="img"/>{items.username}</button>
                      </li>

                        )
                      })
                    }
                      {/* <li className="nav-item" role="presentation">
                          <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Stephen" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-2.png" alt="img"/> Stephen</button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link tab-btn" id="Nick-tab" data-bs-toggle="tab" data-bs-target="#Nick" type="button" role="tab" aria-controls="Nick" aria-selected="false"><img src="./tabicon-3.png" alt="img"/> Nick</button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Judith" type="button" role="tab" aria-controls="Judith" aria-selected="false"><img src="./tabicon-4.png" alt="img"/> Judith</button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Andrea" type="button" role="tab" aria-controls="Andrea" aria-selected="false"><img src="./tabicon-5.png" alt="img"/> Andrea</button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-6.png" alt="img"/> Albert</button>
                      </li> */}
                     
                  </ul>
                  {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                       <li className="nav-item" role="presentation">
                          <button className="nav-link tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src="./tabicon-7.png" alt="img"/> Ernest</button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link tab-btn" id="Estebana-tab" data-bs-toggle="tab" data-bs-target="#Estebana" type="button" role="tab" aria-controls="Estebana" aria-selected="false"><img src="./tabicon8.png" alt="img"/> Estebana</button>
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
                  </ul> */}
                  <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className='tab-cont'>
                      <div className='row tabct-main gx-5'>
                     <div className='col-md-6 tab-left'>
                    <div className='dchallenge-rt-1'>
                             <div className='dule-img1'>
                                <img src="./NFT img1.png" alt="img"/>   
                              </div>
                              <div className='dule-img1'> 
                                <img src="./NFT img1.png" alt="img"/>
                               </div>
                               <div className='dule-img1'>
                                 <img src="./NFT img2.png" alt="img"/>
                                 </div>
                                 <div className='dule-img1'>
                          
                                    
                                 </div>                                
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>SELECT CARDS</button>
                                </div>
                   </div>                            
                  <div className='col-md-6 tab-right'>
                  <div className='dule-rt-2'>
                                <div class="clearfix">
                                    <img src="./User_avatar.png" alt="img"/>
                                    <button type="button" class="btn float-end">Laurie</button>
                                 </div> 
                                </div>
                                <div className='challenge-list'>
                                  <div className='won-title'>
                                    <h4>Challenges won</h4>
                                    <span>5</span>
                                  </div>
                                  <div className='lost-title'>
                                    <h4>Challenges lost</h4>
                                    <span>8</span>
                                  </div>
                                </div>
                                <div className='duel-form'>
                                <div class="mb-3 mt-0">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>send  challenge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="" id="Stephen" aria-labelledby="Stephen-tab">
                  <div className='tab-cont'>
                      <div className='row tabct-main gx-5'>
                      <div className='col-md-6 tab-left'>
                      <div className='dchallenge-rt-1'>

                        <div className='dule-img1'>
                        {
                          arr.map((items,index)=>{
                            return(
                              <>
                                <img src={items} alt="img"/>   

                              </>
                            )
                          })
                        }
                        </div>
                              {/* <div className='dule-img1'> 
                                <img src="./NFT img1.png" alt="img"/>
                               </div>
                               <div className='dule-img1'>
                                 <img src="./NFT img2.png" alt="img"/>
                                 </div> */}
                                 <div className='dule-img1'>
                                   {
                                 <div onClick={handleShow} class="icon-plus button">+</div>
                                   }
                                
                                 </div>                                
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>SELECT CARDS</button>
                                </div>
                            </div>                            
                            <div className='col-md-6 tab-right'>
                            <div className='dule-rt-2'>
                                <div class="clearfix">
                                       <img src="./tabicon-2.png" alt="img"/>
                                    <button type="button" class="btn float-end">Stephen</button>
                                 </div> 
                                </div>
                                <div className='challenge-list'>
                                  <div className='won-title'>
                                    <h4>Challenges won</h4>
                                    <span>5</span>
                                  </div>
                                  <div className='lost-title'>
                                    <h4>Challenges lost</h4>
                                    <span>8</span>
                                  </div>
                                </div>
                                <div className='duel-form'>
                                <div class="mb-3 mt-0">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>send  challenge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>


                  <Modal style = {{height:"800px"}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<input onChange={handleupload} type="file" name="" id="" />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlesubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

                  <div className="tab-pane fade" id="Nick" role="tabpanel" aria-labelledby="Nick-tab">
                  <div className='tab-cont'>
                      <div className='row tabct-main gx-5'>
                      <div className='col-md-6 tab-left'>
                      <div className='dchallenge-rt-1'>

                       
                             <div className='dule-img1'>
                                <img src="./NFT img1.png" alt="img"/>   
                              </div>
                              <div className='dule-img1'> 
                                <img src="./NFT img1.png" alt="img"/>
                               </div>
                               <div className='dule-img1'>
                                 <img src="./NFT img2.png" alt="img"/>
                                 </div>
                                 <div className='dule-img1'>
                                 <input type="file"/>
                                 </div>                                
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>SELECT CARDS</button>
                                </div>
                            </div>                            
                            <div className='col-md-6 tab-right'>
                            <div className='dule-rt-2'>
                                <div class="clearfix">
                                       <img src="./tabicon-3.png" alt="img"/>
                                    <button type="button" class="btn float-end">Nick</button>
                                 </div> 
                                </div>
                                <div className='challenge-list'>
                                  <div className='won-title'>
                                    <h4>Challenges won</h4>
                                    <span>5</span>
                                  </div>
                                  <div className='lost-title'>
                                    <h4>Challenges lost</h4>
                                    <span>8</span>
                                  </div>
                                </div>
                                <div className='duel-form'>
                                <div class="mb-3 mt-0">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>send  challenge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Andrea" role="tabpanel" aria-labelledby="Andrea-tab">
                  <div className='tab-cont'>
                      <div className='row tabct-main gx-5'>
                      <div className='col-md-6 tab-left'>
                      <div className='dchallenge-rt-1'>
                             <div className='dule-img1'>
                                <img src="./NFT img1.png" alt="img"/>   
                              </div>
                              <div className='dule-img1'> 
                                <img src="./NFT img1.png" alt="img"/>
                               </div>
                               <div className='dule-img1'>
                                 <img src="./NFT img2.png" alt="img"/>
                                 </div>
                                 <div className='dule-img1'>
                                 <input type="file"/>
                                    
                                 </div>                                
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>SELECT CARDS</button>
                                </div>
                            </div>                            
                            <div className='col-md-6 tab-right'>
                            <div className='dule-rt-2'>
                                <div class="clearfix">
                                       <img src="./tabicon-5.png" alt="img"/>
                                    <button type="button" class="btn float-end">Andrea</button>
                                 </div> 
                                </div>
                                <div className='challenge-list'>
                                  <div className='won-title'>
                                    <h4>Challenges won</h4>
                                    <span>5</span>
                                  </div>
                                  <div className='lost-title'>
                                    <h4>Challenges lost</h4>
                                    <span>8</span>
                                  </div>
                                </div>
                                <div className='duel-form'>
                                <div class="mb-3 mt-0">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>send challenge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                  

                  <div className="tab-pane fade" id="Judith" role="tabpanel" aria-labelledby="Judith-tab">
                  <div className='tab-cont'>
                      <div className='row tabct-main gx-5'>
                      <div className='col-md-6 tab-left'>
                      <div className='dchallenge-rt-1'>
                             <div className='dule-img1'>
                                <img src="./NFT img1.png" alt="img"/>   
                              </div>
                              <div className='dule-img1'> 
                                <img src="./NFT img1.png" alt="img"/>
                               </div>
                               <div className='dule-img1'>
                                 <img src="./NFT img2.png" alt="img"/>
                                 </div>
                                 <div className='dule-img1'>
                                 <input type="file"/>
                                    
                                 </div>                                
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>SELECT CARDS</button>
                                </div>
                            </div>                            
                            <div className='col-md-6 tab-right'>
                            <div className='dule-rt-2'>
                                <div class="clearfix">
                                       <img src="./tabicon-4.png" alt="img"/>
                                    <button type="button" class="btn float-end">Judith</button>
                                 </div> 
                                </div>
                                <div className='challenge-list'>
                                  <div className='won-title'>
                                    <h4>Challenges won</h4>
                                    <span>5</span>
                                  </div>
                                  <div className='lost-title'>
                                    <h4>Challenges lost</h4>
                                    <span>8</span>
                                  </div>
                                </div>
                                <div className='duel-form'>
                                <div class="mb-3 mt-0">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>Send Challenge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Estebana" role="tabpanel" aria-labelledby="Estebana-tab">
                  <div className='tab-cont'>
                     
                 <div className='row tabct-main gx-5'>
                 <div className='col-md-6 tab-left'>
                    <div className='dchallenge-rt-1'>
                             <div className='dule-img1'>
                                <img src="./NFT img1.png" alt="img"/>   
                              </div>
                              <div className='dule-img1'> 
                                <img src="./NFT img1.png" alt="img"/>
                               </div>
                               <div className='dule-img1'>
                                 <img src="./NFT img2.png" alt="img"/>
                                 </div>
                                 <div className='dule-img1'>
                                 <input type="file"/>
                             
                                    
                                 </div>                                
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>SELECT CARDS</button>
                                </div>
                   </div>
                            
                  <div className='col-md-6 tab-right'>
                  <div className='dule-rt-2'>
                                <div class="clearfix">
                                       <img src="./tabicon8.png" alt="img"/>
                                    <button type="button" class="btn float-end">Estebana</button>
                                 </div> 
                                </div>
                                <div className='challenge-list'>
                                  <div className='won-title'>
                                    <h4>Challenges won</h4>
                                    <span>5</span>
                                  </div>
                                  <div className='lost-title'>
                                    <h4>Challenges lost</h4>
                                    <span>8</span>
                                  </div>
                                </div>
                                <div className='duel-form'>
                                <div class="mb-3 mt-0">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>send  challenge</button>
                                </div>
            </div>
          </div>
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

export default DuelChallenge;
