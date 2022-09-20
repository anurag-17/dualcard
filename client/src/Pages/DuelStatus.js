import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DuelStatus.css";
import { Loader } from "../component/Loader";

export const DuelStatus = () => {
  const [challengedata,setchallengedata] = useState([]);
  const data = JSON.parse(localStorage.getItem("nftuser"));
  const [loading,setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2100);
  const getrecieved = async () => {
    const res = await axios.post("/api/auth/challengestatus", { id: data._id });
    setchallengedata(res.data);
  };
  useEffect(() => {
    getrecieved();
  });

  return (
    <>
      <div className="body-main">
        {loading ? (
          <Loader/>
        ):(
          <div className="duelstatus-sec">
            <div className="container">
              <div className="user-title">
                <h1>{data.username}</h1>
              </div>
              <div>
                <div className="duelsatus-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Challenger</th>
                        <th>Reciever</th>
                        <th>Status</th>
                        <th>Go to challenge</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    {challengedata.map((items, index) => {
                      return (
                        <React.Fragment key={items._id}>
                          <tbody>
                            <tr>
                              <td>{items.player_1[0].name}</td>
                              <td>{items.player_2[0].name}</td>

                              {items.Accept === "true" &&
                              items.result === "pending" ? (
                                <td>Accepted</td>
                              ) : items.Accept === "decline" ? (
                                <td>Declined</td>
                              ) : items.Accept === "pending" ? (
                                <td>Pending</td>
                              ) : (
                                <td>Declared</td>
                              )}
                              {items.Accept === "true" &&
                              items.result === "pending" ? (
                                <td>
                                  <Link to="/DuelAccepted">
                                    <button className="table-hero-btn">
                                      Go To Challenge
                                    </button>
                                  </Link>
                                </td>
                              ) : (
                                <td>
                                  
                                  <button disabled className="table-hero-btn">
                                    Go To Challenge
                                  </button>
                                </td>
                              )}

                              <td>
                                {items.winner === data.username ? (
                                  <h4 style={{ color: "green" }}>You Won</h4>
                                ):items.loser === data.username ? (
                                  <h4 style={{ color: "red" }}>You Lose</h4>
                                ):items.Accept==="decline"?(
                                  <h4>Cancelled</h4>
                                ):<h4>Pending</h4>}
                              </td>
                            </tr>
                          </tbody>
                        </React.Fragment>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DuelStatus;
