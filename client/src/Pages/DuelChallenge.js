import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./DuelChallenge.css";
import { useDispatch, useSelector } from "react-redux";
import { postimage } from "../actions/apiAction";
import img1 from "../images/Plus.png";
import { Link } from "react-router-dom";
import {Loader} from "../component/Loader"

const DuelChallenge = () => {
  const { image, isImage, loading} = useSelector((state) => state.image);
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
  const [userId, setUserId] = useState("");
  const [userprofiledata, setUserprofiledata] = useState([]);
  const [show, setShow] = useState(false);
  const [userimagedata, setuserimagedata] = useState([]);
  const[challenge,setchallenge] = useState({
    playeronetext:"",
    playeroneuserid:"",
    userId:"",
    playertwotext:"",
    playertwo_url:"",
    playertwouserid:"" 
    
  })
 
  // console.log(targetname)
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const getuserdata = async () => {
    const res = await axios.get("/api/auth/getuserdata");
    setUserdata(res.data);
    const localdata = JSON.parse(localStorage.getItem("nftuser"));

    const filtereduser = userdata.filter((items, index) => {
      return items._id !== localdata.user._id;
    });

    setnewuserdata(filtereduser);
    
  };
  getuserdata();
  getimages();
  async function getimages() {
    const data = JSON.parse(localStorage.getItem("nftuser"));

    console.log();
    const res = await axios
      .post("/api/auth/getdata",data)
      .then((data) => {
        setuserimagedata(data.data);
      })
  

    //  console.log(userimagedata)
    // setfinalimagedata(newimagedata)
    // console.log(setfinalimagedata)
  }

  const handleupload = async (e) => {
    const files = e.target.files[0];
    setFiledata(files);
    const userdata = JSON.parse(localStorage.getItem("nftuser"));
    setUserprofiledata([userdata]);
    setUserId(userdata.user._id);
    setlocaluser(userdata.user.username);
  };
  const handlesubmit = async () => {
    let data = new FormData();
    data.append("file", filedata);
    data.append("upload_preset", "nftimg");
    data.append("cloud_name", "degu3b9yz");
    dispatch(postimage(data, userId));

    //   await fetch("https://api.cloudinary.com/v1_1/degu3b9yz/image/upload", {
    //     method: "POST",
    //     body: data,
    //   }).then((res)=>res.json()).then((data)=>{
    //   const imgUrl = data.url
    //   setUrl(data.url)
    //   arr.push(imgUrl)

    //   console.log(imgdata)

    // }).catch((err)=>{
    //   console.log(err)`
    // })

    setShow(false);
  };
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
      const data = await axios.post("/upload", {
        userId,
        image,
      });
      console.log(data);
      // arr.push(data)
    }
  }
  const submitCards = async () => {};

  const sendValue = async() => {

const res = await  axios.post("api/auth/sendchal",
{ playerone_url:userimagedata,playeronetext:textvalue,userId:userId},
)

console.log(res.data)


  };
const handleuserclick = async(e)=>{
console.log(e)
  console.log(e.target.name)
 settargetname(e.target.value)

}

  useEffect(() => {
    postImageUrl();

  }, [image]);

  return (
    <div>
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
                  {newuserdata.map((items, index) => {
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
                            <button onClick={submitCards} className="hero-btn">
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
                              return (
                                
                                <>
                                  <div className="dule-img1">
                                    <img src={items.url} alt="nftimages" />
                                  </div>
                                </>
                              );
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
                            <button className="hero-btn">SELECT CARDS</button>
                          </div>
                        </div>
                        <div className="col-md-6 tab-right">
                          <div className="dule-rt-2">
                            <div class="clearfix">
                              <img src="./tabicon-2.png" alt="img" />
                              <button type="button" class="btn float-end">
                                {targetname}
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
                            <Link to = "/thankyou">
                            <button
                              onClick={sendValue}
                              className="hero-btn challenge"
                            >
                              send challenge
                            </button>
                            </Link>
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
    </div>
  );
};

export default DuelChallenge;
