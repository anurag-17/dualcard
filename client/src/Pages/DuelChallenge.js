import axios from "axios";
import React, { useEffect, useState,useRef} from "react";
import { Button, Modal } from "react-bootstrap";
import "./DuelChallenge.css";
import { useDispatch, useSelector } from "react-redux";
import { postimage } from "../actions/apiAction";
import img1 from "../images/Plus.png";
import { Link,useNavigate} from "react-router-dom";
import { Loader } from "../component/Loader";
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import "./tickimage.css"


const DuelChallenge = () => {
  const controlref = useRef()
  const navigate = useNavigate()
  const data = localStorage.getItem("nftuser")
  const { image, isImage, loading} = useSelector((state) => state.image);
  const {isAuthenticated,user} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const [targetname, settargetname] = useState("");
  const [textvalue, setTextvalue] = useState("");
  const [newarr, setNewarr] = useState([]);
  const [filedata, setFiledata] = useState("");
  const [finalimagedata, setfinalimagedata] = useState([]);
  const [imgdata, setImgdata] = useState({
    url: "",
    userId: "",
  });
  const [userdata, setUserdata] = useState([]);
  const [localuser, setlocaluser] = useState("");
  const [newuserdata, setnewuserdata] = useState([]);
  const [searchfilter,setsearchfilter] = useState([])
  const [userId, setUserId] = useState("");
  const [runfun,setrunfun] = useState(true)
  const [loader,setLoader] = useState(false)
  const [userprofiledata, setUserprofiledata] = useState([]);
  const [show, setShow] = useState(false);
  const [userimagedata, setuserimagedata] = useState([]);
  const [clickeduser,setclickeduser] = useState("")
  const [firstname,setfirstname] = useState(true)
  const [checkedimage,setcheckedimage] = useState([])
let ischecked = ""

 
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
    

 

async function getuserdata(){

  if(!firstname){
    return;
  }
    const res = await axios.get("/api/auth/getuserdata");
    setUserdata(res.data);
    const localdata = JSON.parse(localStorage.getItem("nftuser"))
   
    setlocaluser(localdata.username)

userdata.sort((a,b) => a.username.localeCompare(b.username))

    const filtereduser = userdata.filter((items, index) => {
      return items._id !==localdata._id;
    });
  
    setnewuserdata(filtereduser);
    setsearchfilter(filtereduser)
    return
  }
  
  if(runfun){
    getuserdata()
  }

  
  
  const handleupload = async (e) => {
    const files = e.target.files[0];
    console.log(files)
    setFiledata(files);
    const userdata = JSON.parse(localStorage.getItem("nftuser"));
    setUserprofiledata([userdata]);
    setUserId(userdata._id);
  };

  const handlesubmit = async () => {
    let data = new FormData();
    data.append("file", filedata);
    data.append("upload_preset", "nftimg");
    data.append("cloud_name", "degu3b9yz");
    dispatch(postimage(data));

    setShow(false);
  };
  const getchekedimage = (event)=>{
 
    if(ischecked===false){
      console.log(event.target.src)
      
    }else{
      checkedimage.push(event.target.src)
      console.log(checkedimage)
      
    }
  }

  async function getimages() {
    const data = JSON.parse(localStorage.getItem("nftuser"));

    const res = await axios
      .post("/api/auth/getdata",data)
      .then((data) => {
        setuserimagedata(data.data);

      })
  }
  getimages();

  
  async function postImageUrl() {
    imgdata.userId = userId;
    imgdata.url = image;
    console.log(imgdata);
    newarr.push(imgdata);
    if (image) {
      localStorage.setItem("userImages", JSON.stringify(newarr));
      const localimages = JSON.parse(localStorage.getItem("userImages"));
      console.log(localimages);
      finalimagedata.push(localimages);
    }

    if (image) {
      const data = await axios.post("/upload",{
        userId,
        image,
      });
      console.log(data);
    }
  }


  const sendValue = async() => {
setLoader(true)
const res = await  axios.post("/api/auth/sendchal",
{ playerone_url:checkedimage,
  playeronetext:textvalue,
  playeroneuserid:userId,
  playertwouserid:clickeduser,
  playeronename:localuser,
  playertwoname:targetname
},
)

if(res){
  setLoader(false)
  navigate("/thankyou")
}
console.log(res.data)

  };
const handleuserclick = async(e)=>{
  setfirstname(false)
console.log(e)
     setclickeduser(e.target.name)
     settargetname(e.target.value)
     console.log(clickeduser)
}

const handleSearch =(event)=>{
  setrunfun(false)
  let keyword = event.target.value
    const result = newuserdata.filter((user)=>{
      return user.username.toLowerCase().startsWith(keyword.toLowerCase())
    })
  
    setsearchfilter(result)
}
const handlecheck = (e)=>{
  ischecked = e.target.checked
  console.log(ischecked)
}


  useEffect(() => {
    postImageUrl();
  }, [image]);

  return (

   
    <div>
      {
        loader?<Loader/>:
      <>
      <div className="duelchalenge-sec">
        <div className="container">
          <div className="section-title">
            <h2>Commence Duel/Challenge</h2>
          </div>

          <div className="search-bar">
            <div class="input-group md-form form-sm form-2 pl-0">
              <input
                class="form-control my-0 py-1 red-border"
                type="text"
                placeholder="Search"
                aria-label="Search"
              onChange={(event) =>handleSearch(event)}
              />
              <div class="input-group-append">
                <span class="input-group-text red lighten-3" id="basic-text1">
                  <i class="fas fa-search text-grey" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="tab-challange">
              <div className="tab-section">
                <ul className="nav nav-tabs" id="myTab" role="tablist">



                  {searchfilter.map((items, index) => {
                  
                    return (
                      <li className="nav-item" role="presentation">
                        <button
                          value={items.username}
                          onClick={handleuserclick}
                          name = {items._id}
                          className="nav-link active tab-btn"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          {" "}
                          <img
                            src={require(`../images/tabicon-${index + 1}.png`)}
                            alt="img"
                          />
                          {items.username}
                        </button>
                      </li>
                    );
                  })}
                </ul>
     
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="tab-cont">
                      <div className="row tabct-main gx-5">
                        <div className="col-md-6 tab-left">
                          <div className="dchallenge-rt-1">
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img2.png" alt="img" />
                            </div>
                            <div className="dule-img1"></div>
                          </div>
                          <div className="btn-duel-right">
                            <button  className="hero-btn">
                              SELECT CARDS
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6 tab-right">
                          <div className="dule-rt-2">
                            <div class="clearfix">
                              <img src="./User_avatar.png" alt="img" />
                              <button type="button" class="btn float-end">
                                Laurie
                              </button>
                            </div>
                          </div>
                          <div className="challenge-list">
                            <div className="won-title">
                              <h4>Challenges won</h4>
                              <span>5</span>
                            </div>
                            <div className="lost-title">
                              <h4>Challenges lost</h4>
                              <span>8</span>
                            </div>
                          </div>
                          <div className="duel-form">
                            <div class="mb-3 mt-0">
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Write your terms"
                                rows="10"
                              ></textarea>
                            </div>
                          </div>
                          <div className="btn-duel-right">
                            <Link to="/DuelRecieved">
                              {/* <button className='hero-btn'>send  challenge</button> */}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="" id="Stephen" aria-labelledby="Stephen-tab">
                    <div className="tab-cont">
                      <div className="row tabct-main gx-5">
                        <div className="col-md-6 tab-left">

                          {
                            loading?<Loader style={{backgroundColor:"#282054"}}/>:
                          <div className="dchallenge-rt-1">
                            {userimagedata.map((items, index) => {

return(
  <>
  <div class="grid-two imageandtext">
<div class="imageandtext image_grid">
  <label>
    <img onClick={getchekedimage} src={items.url} class="img-thumbnail"/>
    <input onChange={handlecheck} ref={controlref} type="checkbox" name="selimg"/>
    <span class="caption">
    </span>
  </label>
</div>
</div>

  </>
)
                              // return (
                                
                              //  <div className="grid-two imageandtext">
                              //   <div className = "imageandtext image_grid">

                              //    <div className="dule-img1">
                              //    <label htmlFor="selimg2">
                              //      <img src={items.url} alt="nftimages" />
                              //     </label>
                              //     <input type="radio" name="selimg" id="selimg2"/>
                              //   </div>
                              //   </div>
                              //  </div>
                              // );
                            })}
                        
                            <div
                              style={{
                                border: "2px dashed #4A6BBC",
                                height: "250px",
                                borderRadius: "16px",
                              }}
                              className="dule-img1"
                            >
                              {
                                <div
                                  style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: "65px",
                                    left: "20px",
                                  }}
                                  onClick={handleShow}
                                  class="icon-plus button"
                                >
                                  <img src={img1} />
                                </div>
                              }
                            </div>
                          </div> 
                          }
                          <div className="btn-duel-right">
                            <button onClick={handleShow} className="hero-btn">SELECT CARDS</button>
                          </div>
                        </div>
                        <div className="col-md-6 tab-right">
                          <div className="dule-rt-2">
                            <div class="clearfix">
                        
                        { 
                          searchfilter.map((items,index)=>{
                            if(index===0){
                                       
                              return(<>
                              
                              <img src="./tabicon-14.png" alt="img" />
                              <button type="button" class="btn float-end">
                              
                               {firstname?items.username:targetname} 
                              </button>
                              </>
                            )
                          }

                          })
                        }
                              
                            </div>
                          </div>
                          <div className="challenge-list">
                            <div className="won-title">
                              <h4>Challenges won</h4>
                              <span>5</span>
                            </div>
                            <div className="lost-title">
                              <h4>Challenges lost</h4>
                              <span>8</span>
                            </div>
                          </div>
                          <div className="duel-form">
                            <div class="mb-3 mt-0">
                              <textarea
                                onChange={(e) => setTextvalue(e.target.value)}
                                value={textvalue}
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Write your terms"
                                rows="10"
                              ></textarea>
                            </div>
                          </div>
                          <div className="btn-duel-right challenge">
                            <button
                              onClick={sendValue}
                              className="hero-btn challenge"
                            >
                              send challenge
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Modal
                    style={{ height: "800px" }}
                    show={show}
                    onHide={handleClose}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input
                        multiple
                        onChange={handleupload}
                        type="file"
                        name=""
                        id=""
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handlesubmit}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <div
                    className="tab-pane fade"
                    id="Nick"
                    role="tabpanel"
                    aria-labelledby="Nick-tab"
                  >
                    <div className="tab-cont">
                      <div className="row tabct-main gx-5">
                        <div className="col-md-6 tab-left">
                          <div className="dchallenge-rt-1">
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img2.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <input type="file" />
                            </div>
                          </div>
                          <div className="btn-duel-right">
                            <button className="hero-btn">SELECT CARDS</button>
                          </div>
                        </div>
                        <div className="col-md-6 tab-right">
                          <div className="dule-rt-2">
                            <div class="clearfix">
                              <img src="./tabicon-3.png" alt="img" />
                              <button type="button" class="btn float-end">
                                Nick
                              </button>
                            </div>
                          </div>
                          <div className="challenge-list">
                            <div className="won-title">
                              <h4>Challenges won</h4>
                              <span>5</span>
                            </div>
                            <div className="lost-title">
                              <h4>Challenges lost</h4>
                              <span>8</span>
                            </div>
                          </div>
                          <div className="duel-form">
                            <div class="mb-3 mt-0">
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Write your terms"
                                rows="10"
                              ></textarea>
                            </div>
                          </div>
                          <div className="btn-duel-right">
                            <button className="hero-btn">send challenge</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Andrea"
                    role="tabpanel"
                    aria-labelledby="Andrea-tab"
                  >
                    <div className="tab-cont">
                      <div className="row tabct-main gx-5">
                        <div className="col-md-6 tab-left">
                          <div className="dchallenge-rt-1">
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img2.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <input type="file" />
                            </div>
                          </div>
                          <div className="btn-duel-right">
                            <button className="hero-btn">SELECT CARDS</button>
                          </div>
                        </div>
                        <div className="col-md-6 tab-right">
                          <div className="dule-rt-2">
                            <div class="clearfix">
                              <img src="./tabicon-5.png" alt="img" />
                              <button type="button" class="btn float-end">
                                Andrea
                              </button>
                            </div>
                          </div>
                          <div className="challenge-list">
                            <div className="won-title">
                              <h4>Challenges won</h4>
                              <span>5</span>
                            </div>
                            <div className="lost-title">
                              <h4>Challenges lost</h4>
                              <span>8</span>
                            </div>
                          </div>
                          <div className="duel-form">
                            <div class="mb-3 mt-0">
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Write your terms"
                                rows="10"
                              ></textarea>
                            </div>
                          </div>
                          <div className="btn-duel-right">
                            <button className="hero-btn">send challenge</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="Judith"
                    role="tabpanel"
                    aria-labelledby="Judith-tab"
                  >
                    <div className="tab-cont">
                      <div className="row tabct-main gx-5">
                        <div className="col-md-6 tab-left">
                          <div className="dchallenge-rt-1">
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img2.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <input type="file" />
                            </div>
                          </div>
                          <div className="btn-duel-right">
                            <button className="hero-btn">SELECT CARDS</button>
                          </div>
                        </div>
                        <div className="col-md-6 tab-right">
                          <div className="dule-rt-2">
                            <div class="clearfix">
                              <img src="./tabicon-4.png" alt="img" />
                              <button type="button" class="btn float-end">
                                Judith
                              </button>
                            </div>
                          </div>
                          <div className="challenge-list">
                            <div className="won-title">
                              <h4>Challenges won</h4>
                              <span>5</span>
                            </div>
                            <div className="lost-title">
                              <h4>Challenges lost</h4>
                              <span>8</span>
                            </div>
                          </div>
                          <div className="duel-form">
                            <div class="mb-3 mt-0">
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Write your terms"
                                rows="10"
                              ></textarea>
                            </div>
                          </div>
                          <div className="btn-duel-right">
                            <button className="hero-btn">Send Challenge</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Estebana"
                    role="tabpanel"
                    aria-labelledby="Estebana-tab"
                  >
                    <div className="tab-cont">
                      <div className="row tabct-main gx-5">
                        <div className="col-md-6 tab-left">
                          <div className="dchallenge-rt-1">
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img1.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <img src="./NFT img2.png" alt="img" />
                            </div>
                            <div className="dule-img1">
                              <input type="file" />
                            </div>
                          </div>
                          <div className="btn-duel-right">
                            <button className="hero-btn">SELECT CARDS</button>
                          </div>
                        </div>

                        <div className="col-md-6 tab-right">
                          <div className="dule-rt-2">
                            <div class="clearfix">
                              <img src="./tabicon8.png" alt="img" />
                              <button type="button" class="btn float-end">
                                Estebana
                              </button>
                            </div>
                          </div>
                          <div className="challenge-list">
                            <div className="won-title">
                              <h4>Challenges won</h4>
                              <span>5</span>
                            </div>
                            <div className="lost-title">
                              <h4>Challenges lost</h4>
                              <span>8</span>
                            </div>
                          </div>
                          <div className="duel-form">
                            <div class="mb-3 mt-0">
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Write your terms"
                                rows="10"
                              ></textarea>
                            </div>
                          </div>
                          <div className="btn-duel-right">
                            <button className="hero-btn">send challenge</button>
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
      
      </>
      }

    </div>
  );
};

export default DuelChallenge;
