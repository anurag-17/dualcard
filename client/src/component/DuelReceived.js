import React, { useEffect, useState } from "react";
import "./DuelReceived.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";
import { Loader } from "./Loader";
import { postimage } from "../actions/apiAction";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../images/Plus.png";
import { Button, Modal } from "react-bootstrap";
import "../Pages/tickimage.css";
import { useAlert } from "react-alert";



const DuelReceived = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const { image, isImage} = useSelector((state) => state.image);
  const [playertwoname,setplayertwoname] = useState("")
  const [challengedata, setchallengedata] = useState([]);
const [challengeid,setChallengeId] = useState("")
const [loader,setLoader] = useState(true)
const [filedata, setFiledata] = useState("");
const [userid,setUserId] = useState("")
const [show,setShow] = useState(false)
const [userimagedata, setuserimagedata] = useState([]);
const [loading,setLoading] = useState(false)
let ischecked = "";
const [checkedimage, setcheckedimage] = useState([]);
const [errromessage,setErrorMessage] = useState("")
const [challengerid,setChallengerId]  = useState("")
let  acceptchallenge = ""


const iddata  = JSON.parse(localStorage.getItem("nftuser"))
const userId  = iddata._id
console.log(userId)


const navigate = useNavigate()

  const data = JSON.parse(localStorage.getItem("nftuser"));

  const id=data._id;

  setTimeout(()=>{
    setLoader(false)
    },2000)

    const handleClose = () => {
      setShow(false);
    };

    const handleShow = () => setShow(true);

  const getrecieved = async () => {
    console.log(id);
    const res = await axios.post("/api/auth/recievedchallenge",{id:id,Accept:"pending",decline:false,result:"pending"});
    res.data.map((items,index)=>{
      setChallengerId(items._id)
      console.log(items._id)
      console.log(items.player_2[0].name)
      setplayertwoname(items.player_2[0].name)
       
      // challengeid.push(items._id)

    })
    setchallengedata(res.data);
  };

  const handlecheck = (e) => {
    ischecked = e.target.checked;
    console.log(ischecked);
  };

  const getchekedimage = (event) => {
    if (ischecked === false) {
      console.log(event.target.src);
    } else {
      checkedimage.push(event.target.src);
      console.log(checkedimage);
    }
  };

  const AcceptChallenge = async(index)=>{
    if(checkedimage.length<=0){
      setErrorMessage("please select the cards")
      setTimeout(()=>{
    setErrorMessage("")
      },2200)
          return
        }
        let acceptindex = index
        acceptchallenge = true
        console.log(acceptchallenge)
        console.log(challengeid)
      setLoading(true)
    const res = await axios.put("/api/auth/acceptchallenge",{Accept:acceptchallenge,challengerid:challengedata[acceptindex]._id,decline:false,playertwo_url:checkedimage,name:playertwoname})
    if(res){
      setLoader(false)
      navigate("/DuelAccepted")
}
  }

  const DeclineChallenge = async()=>{
  console.log(challengerid)
    setLoading(true)
    const res = await axios.put("/api/auth/declinechallenge",{challengerid:challengerid})
    if(res){
      window.location.reload()
      setLoader(false)
    }
     
      }
  

  const handleupload = async (e) => {
    const files = e.target.files[0];
    console.log(files);
    setFiledata(files);
    const userdata = JSON.parse(localStorage.getItem("nftuser"));
    setUserId(userdata._id);
    console.log(userid);
  };

  const handlesubmit = async () => {
    let data = new FormData();
    data.append("file", filedata);
    data.append("upload_preset", "nftimg");
    data.append("cloud_name", "degu3b9yz");
    dispatch(postimage(data));
    setShow(false);
  };

  
  async function postImageUrl() {
    // if (image) {
    //   localStorage.setItem("userImages", JSON.stringify(newarr));
    //   const localimages = JSON.parse(localStorage.getItem("userImages"));
    //   console.log(localimages);
    //   finalimagedata.push(localimages);
    // }

    if (image) {
      const data = await axios.post("/upload", {
        userId,
        image
      });
      console.log(data);
    }
  }

  async function getimages() {
    const data = JSON.parse(localStorage.getItem("nftuser"));

    const res = await axios.post("/api/auth/getdata",data).then((data) => {
      setuserimagedata(data.data);
    });
  }
  getimages();

  
  useEffect(() => {
    getrecieved();
   postImageUrl()

  }, [loader,acceptchallenge]);




  return (
   <>
   {
    loader?<Loader/>:
    <div>
    {
      loading?<Loader/>:
      <div className="DuelRec-sec">
        <div className="container">
          <div className="section-title">
            <h2 className = "body-main">Duel Received</h2>
          </div>

{
    challengedata.length>0?<>
    
          <div className="row duel-main">
          {
              challengedata.map((items,index)=>{
                                    
                  return(
                      
                      <>
                      
            <div className="col-md-4 col-sm-12 duel-left">
              <div className="duel-lef-slide">
                      <div className="duel-sldier">
                  <Carousel>
                    {
                    items.player_1[0].images.map((items, index) => {
                        return (
                            <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={items}
                              alt="First slide"
                              
                            />
                            </Carousel.Item>
                          );
                        
                    })
                }
                    </Carousel>
                    </div>
                <div className="duel-des">

                          <div class="clearfix">
                        <button type="button" class="btn float-end">
                          {items.player_1[0].name}
                        </button>

                    <img style={{height:"55px"}} src={require(`../images/tabicon-${index + 1}.png`)} alt="newimg" />
                  </div>
                      
                  <div className="duel-leftgreen-text mt-3">
                    <h4>
                      <span>5</span>won
                    </h4>
                  </div>
                  <div className="duel-leftred-text">
                    <h4>
                      <span>8</span>lost
                    </h4>
                  </div>
                </div>
              </div>
              <div className="dule-cont">
               
                {items.player_1.map((item,index)=>{
return(
    <>
                        <h4>TERMS</h4>
                        <p>{item.text}.</p>  
                      </>
)
                })} 
                
  
                  
              </div>
            </div>
            <div className="col-md-2 duel-center">
              <img src="./VS icon.png" alt="img" />
            </div>
            <div className="col-md-6 duel-right">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  {
                    loading?<Loader/>:  <div className="dule-rt-1">
                    {
                     userimagedata.map((items,index)=>{
                       return(

                         <div class="grid-two imageandtext">
                         <div class="imageandtext image_grid">
                           <label>
                             <img
                               onClick={getchekedimage}
                               src={items.url}
                               className="img-thumbnail"
                             />
                             <input
                               onChange={handlecheck}
                               type="checkbox"
                               name="selimg"
                             />
                             <span class="caption"></span>
                           </label>
                         </div>
                       </div>
                         
                       )
                     })
                    }
               <div
                                 style={{
                                   border: "2px dashed #4A6BBC",
                                   borderRadius: "16px",
                                   width:"130px"

                                 }}
                                 className="dule-img1"
                               >
                                 {
                                   <div
                                     style={{
                                       textAlign: "center",
                                       position: "relative",
                                       top: "45px",
                                       left: "12px",
                                       width:"100px"
                                     }}
                                     onClick={handleShow}
                                     className="icon-plus button"
                                   >
                                     <img src={img1} />
                                   </div>
                                 }
                               </div>
                
               </div> 
                  }
               
               {
errromessage&&<div style = {{position:"relative",left:"35%",bottom:"50%"}} className="popup error">
<div className="message">
<p>{errromessage}</p>
</div>
<div className="action">
<button onClick={()=>setErrorMessage("")}>Ok</button>
</div>
</div>
}

                  <div className="btn-duel-right">
                    <button onClick={handleShow} className="hero-btn">SELECT CARDS</button>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="dule-rt-2">
                    <div class="clearfix">
                      <img src="./tabicon8.png" alt="img" />
                      <button type="button" class="btn float-end">
                        {data.username}
                      </button>
                    </div>
                  </div>
                  <div className="duel-form">
                    <div class="mb-3 mt-4">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Write your terms"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div className="btn-duel-right">
                    <button onClick={()=>AcceptChallenge(index)} className="hero-btn">Accept challenge</button>
                    <button onClick={DeclineChallenge} className="hero-btn">Decline challenge</button>
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
</>
                )
            })
        }
        </div>
    </>:<>
    <div className='body-main'>
        <div className='thank-sec'>
            <div className='container'>
                <div className='thnkct'>
                <h1>You haven't Received any challenges yet </h1>
                    <p>you can challenge someone</p>
                    <p>Duel someone</p>
                   <div className='thankbtn'>
    <Link to = "/DuelSomeone">
    
                    <button class="go-home hero-btn">
                        DuelSomeone
                        </button>
    </Link>
                   </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
        </div>
      </div>
    }
    </div>
   }
   </>
  );
};

export default DuelReceived;
