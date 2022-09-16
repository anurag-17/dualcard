import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import "./DuelChallenge.css";
import { useDispatch, useSelector } from "react-redux";
import { postimage } from "../actions/apiAction";
import img1 from "../images/Plus.png";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../component/Loader";
import "../Pages/tickimage.css";
import { useAlert } from "react-alert";
import Resizer from "react-image-file-resizer";

const DuelSomeone = () => {
  const navigate = useNavigate();
  const { image,loading,isImage}= useSelector((state) => state.image);
  const storagedata = JSON.parse(localStorage.getItem("nftuser"));
  const dispatch = useDispatch();
  const [targetname, settargetname] = useState("");
  const [textvalue, setTextvalue] = useState("");
  const [selectedimage, setselectedimage] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const [localuser, setlocaluser] = useState("");
  const [newuserdata, setnewuserdata] = useState([]);
  const [searchfilter, setsearchfilter] = useState([]);
  const [runfun, setrunfun] = useState(true);
  const [loader, setLoader] = useState(false);
  const [data, setdata] = useState({
    image: "",
    userId: "",
  });
  const [show, setShow] = useState(false);
  const [userimagedata, setuserimagedata] = useState([]);
  const [clickeduser, setclickeduser] = useState("");
  const [firstname, setfirstname] = useState(true);
  const [checkedimage, setcheckedimage] = useState([]);
  const [linkurl, setlinkurl] = useState("");
  const thisid = JSON.parse(localStorage.getItem("nftuser"));
  const [erromessage, setErrorMessage] = useState("");
  const [inputerror, setInputError] = useState("");
  const [sizealert,setSizeAlert] = useState("");
  const [winning,setwinning] = useState("")
  const [losing,setlosing] = useState("")
  const [filesize,setfilesize] = useState()
  const user = storagedata.username


  setTimeout(() => {
    setrunfun(false);
  },1000);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  async function getuserdata() {
    const res = await axios.get("/api/auth/getuserdata");
    setUserdata(res.data);
    const localdata = JSON.parse(localStorage.getItem("nftuser"));
    setlocaluser(localdata.username);

    userdata.sort((a, b) => a.username.localeCompare(b.username));

    const filtereduser = userdata.filter((items, index) => {
      return items._id !== localdata._id;
    });

    setnewuserdata(filtereduser);
    setsearchfilter(filtereduser);
    filtereduser.map((items, index) => {
      if (index === 0) {
        settargetname(items.username);
        setclickeduser(items._id);
        settargetname(items.username);
      }
    });
    return;
  }

  if (runfun) {
    getuserdata();
  }

  const handlefile = (e)=>{
  let file = e.target.files[0].size/1024
   setfilesize(e.target.files[0].size/1024)
   if(file>500){
    setSizeAlert("please upload image only upto 500kb")
    return
   }
   setselectedimage(e.target.files)
  }

  const encodefile = (file) => {
    if (file) {
      try {
        Resizer.imageFileResizer(
         file,
          300,
          300,
          "JPEG",
           80,
          0,
          (uri) => {
            setdata({
                    image:uri,
                    userId:storagedata._id,
                  });
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }

  }
  encodefile(selectedimage[0]);

  const handlesubmit = async () => {
    dispatch(postimage(data));
    setShow(false);
  };

  async function getimages() {
    const res = await axios
      .post("/api/auth/getdata", storagedata)
      .then((data) => {
        var url = data.data[0].url;
        setuserimagedata(data.data);
      });
  }

  const checkboxchange = (e) => {
    if (e.target.checked) {
      checkedimage.push(e.target.value);
      console.log(checkedimage);
    } else {
      checkedimage.pop();
      console.log(checkedimage);
    }
  };

  const countwinlose = async()=>{
    const res = await axios.post("/api/auth/countwinlose",{user:user})
     let winfiltered = res.data.filter((items,index)=>{
      return items.winner === storagedata.username
    })
    setwinning(winfiltered.length)
    setlosing(res.data.length-winfiltered.length)
    
    }


  useEffect(() => {
    getimages();
    countwinlose()
  },[image,loading,isImage,userimagedata]);

  const handleurl = () => {
    setInputError("please enter the url with https");
    setTimeout(() => {
      setInputError("");
    }, 2200);
  };

  const sendValue = async (e) => {
    e.preventDefault();

    if (checkedimage.length <= 0) {
      setErrorMessage("please select cards");
      setTimeout(() =>{
        setErrorMessage("");
      }, 2200);
      return;
    } else if (!targetname) {
      setErrorMessage("please select a name");
      setTimeout(() => {
        setErrorMessage("");
      }, 2200);
      return;
    }

    setLoader(true);
    const res = await axios.post("/api/auth/sendchal", {
      playerone_url: checkedimage,
      playeronetext: textvalue,
      playeroneuserid: thisid._id,
      playertwouserid: clickeduser,
      playeronename: localuser,
      playertwoname: targetname,
      playeronelink: linkurl,
    });

    if (res) {
      setLoader(false);
      navigate("/thankyou");
    }
  };
  const handleuserclick = async (e) => {
    setfirstname(false);
    console.log(e);
    setclickeduser(e.target.name);
    settargetname(e.target.value);
    console.log(targetname);
    console.log(clickeduser);
  };

  const handleSearch = (event) => {
    setrunfun(false);
    let keyword = event.target.value;
    const result = newuserdata.filter((user) => {
      return user.username.toLowerCase().startsWith(keyword.toLowerCase());
    });

    setsearchfilter(result);
  };

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
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
                    onChange={(event)=>handleSearch(event)}
                  />
                  <div class="input-group-append">
                    <span
                      class="input-group-text red lighten-3"
                      id="basic-text1"
                    >
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
                          <li key={items._id} className="nav-item" role="presentation">
                            <button
                              value={items.username}
                              onClick={handleuserclick}
                              name={items._id}
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
                                src={require(`../images/tabicon-${
                                  index + 1
                                }.png`)}
                                alt="img"
                              />
                              {items.username}
                            </button>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="tab-content" id="myTabContent">
                      {erromessage && (
                        <div class="popup error">
                          <div class="message">
                            <p>{erromessage}</p>
                          </div>
                          <div class="action">
                            <button onClick={() => setErrorMessage("")}>
                              Ok
                            </button>
                          </div>
                        </div>
                      )}
                      <div
                        className=""
                        id="Stephen"
                        aria-labelledby="Stephen-tab"
                      >
                        <div className="tab-cont">
                          <div className="row tabct-main gx-5">
                            <div className="col-md-6 tab-left">
                              {loading ? (
                                <Loader />
                              ) : (
                                <div className="dchallenge-rt-1">
                                  {userimagedata.map((items, index) => {
                                    return (
                                      <React.Fragment key = {index}>
                                        <div class="grid-two imageandtext">
                                          <div class="imageandtext image_grid">
                                            <label>
                                              <img
                                                src={items.url}
                                                className="img-thumbnail"
                                              />
                                              <input
                                                onChange={checkboxchange}
                                                type="checkbox"
                                                name="selimg"
                                                value={items.url}
                                              />
                                              <span class="caption"></span>
                                            </label>
                                          </div>
                                        </div>
                                      </React.Fragment>
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
                                        className="icon-plus button"
                                      >
                                        <img src={img1} />
                                      </div>
                                    }
                                  </div>
                                </div>
                              )}
                              <div className="btn-duel-right">
                                <button
                                  onClick={handleShow}
                                  className="hero-btn"
                                >
                                  SELECT CARDS
                                </button>
                              </div>
                            </div>
                            <div className="col-md-6 tab-right">
                              <div className="dule-rt-2">
                                <div class="clearfix">
                                  {searchfilter.map((items, index) => {
                                    if (index === 0) {
                                      return (
                                        <>
                                          <img
                                            src="./tabicon-14.png"
                                            alt="img"
                                          />
                                          <button
                                            type="button"
                                            class="btn float-end"
                                          >
                                            {firstname
                                              ? items.username
                                              : targetname}
                                          </button>
                                        </>
                                      );
                                    }
                                  })}
                                </div>
                              </div>
                              <div className="challenge-list">
                                <div className="won-title">
                                  <h4>Challenges won</h4>
                                  <span>{winning}</span>
                                </div>
                                <div className="lost-title">
                                  <h4>Challenges lost</h4>
                                  <span>{losing}</span>
                                </div>
                              </div>
                              {inputerror && (
                                <div
                                  style={{
                                    position: "relative",
                                    left: "25%",
                                    top: "25%",
                                  }}
                                  className="popup error"
                                >
                                  <div className="message">
                                    <p>{inputerror}</p>
                                  </div>
                                  <div className="action">
                                    <button onClick={() => setInputError("")}>
                                      Ok
                                    </button>
                                  </div>
                                </div>
                              )}
                              <form onSubmit={sendValue}>
                                <div className="duel-form">
                                  <div class="mb-3 mt-0">
                                    <textarea
                                      required
                                      onChange={(e) =>
                                        setTextvalue(e.target.value)
                                      }
                                      value={textvalue}
                                      class="form-control"
                                      id="exampleFormControlTextarea1"
                                      placeholder="Write your terms"
                                      rows="10"
                                    />
                                  </div>
                                </div>

                                <div className="search-bar">
                                  <div className="input-group md-form form-sm form-2 pl-0">
                                    <input
                                      type="url"
                                      required
                                      onInvalid={handleurl}
                                      className="form-control my-0 py-1 red-border"
                                      placeholder="put your twitch or youtube live link"
                                      aria-label="Search"
                                      onChange={(e) =>
                                        setlinkurl(e.target.value)
                                      }
                                    />

                                    <div class="input-group-append"></div>
                                  </div>
                                </div>

                                <div className="btn-duel-right challenge">
                                  <input
                                    type="submit"
                                    // on={sendValue}
                                    placeholder="send Challenge"
                                    className="hero-btn challenge"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <Modal
                        style={{ height: "800px" }}
                        show={show}
                        onHide={handleClose}
                      >
                          {sizealert&& (
                                <div
                                  style={{
                                    position: "relative",
                                    left: "25%",
                                                              
                                  }}
                                  className="popup error"
                                >
                                  <div className="message">
                                    <p>{sizealert}</p>
                                  </div>
                                  <div className="action">
                                    <button onClick={() => setSizeAlert("")}>
                                      Ok
                                    </button>
                                  </div>
                                </div>
                              )}
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <input
                            multiple
                            onChange={handlefile}
                            type="file"
                            name=""
                            id=""
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <button className="btn btn-primary" disabled={filesize>500} onClick={handlesubmit}>
                            Save Changes
                          </button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <Link to="/duelstatus">
                <h4 style={{ color: "white" }}>
                  Please check status for previous Duel Challenges
                </h4>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DuelSomeone;
