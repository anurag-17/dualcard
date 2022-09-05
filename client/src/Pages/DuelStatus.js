import React, { useState,useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

export const DuelStatus = () => {
    const [challengedata, setchallengedata] = useState([]);
    const [challengeid,setChallengeId] = useState("")

const data = JSON.parse(localStorage.getItem("nftuser"))

console.log(data)
const getrecieved = async () => {
    const res = await axios.post("/api/auth/challengestatus",{id:data._id});
    console.log(res)
    res.data.map((items,index)=>{
      console.log(items)
      console.log(items._id)
        setChallengeId(items._id)
    })
    console.log(challengeid)
    setchallengedata(res.data);
  };

useEffect(()=>{
getrecieved()
},[])


  return (
<>

<h1 style={{color:"red",marginTop:"100px"}}>{data.username}</h1>
<h2>{data._id}</h2>

<div>
<table className='table table-bordered'>
            <thead>
                <tr>
                    <th>user</th>
                    <th>Status</th>
                    <th>go to challenge</th>
                </tr>
                </thead>
{
    challengedata.map((items,index)=>{
        console.log(items.player_2[0].name)
    var accept = "Accepted"
    var notaccept = "Not Accepted"
    var decline = "Challenge Declined"


        return(
            
        <>
            <tbody>
                <tr>
                <td>{items.player_2[0].name}</td>
                <td>{items.Accept==="true"?"Accepted":"Decline"}</td>
                {
                items.Accept==="true"?<td>
                    <Link to="/DuelAccepted"><button className='table-hero-btn'>go to challenge</button></Link></td>:""
                }
                </tr>
            </tbody>
        </>

)
})
}
</table>

</div>

</> 
 )
}
