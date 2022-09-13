import React, { useState,useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import './DuelStatus.css';
import { Loader } from '../component/Loader';

export const DuelStatus = () => {

const [challengedata, setchallengedata] = useState([]);
const data = JSON.parse(localStorage.getItem("nftuser"))
const [loading,setLoading] = useState(false)

console.log(data)
const getrecieved = async () => {
    setLoading(true)
    const res = await axios.post("/api/auth/challengestatus",{id:data._id,result:"pending"});
    setchallengedata(res.data);
if(res){
    setLoading(false)
}

  };

useEffect(()=>{
getrecieved()
},[])


  return (
<>
    <div className='body-main'>
        <div className='duelstatus-sec'>
            <div className='container'>
{
 loading?<Loader style = {{height:"100px"}}/>:<>
    
            <div className='user-title'>
                <h1>{data.username}</h1> 
            </div>   
            <div>
            <div className='duelsatus-table'>  
                <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>challenger</th>
                                    <th>Reciever</th>
                                    <th>Status</th>
                                    <th>Go to challenge</th>
                                </tr>
                                </thead>
                {
                    challengedata.map((items,index)=>{
                        return(
                        <>
                            <tbody>
                                <tr>
                                <td>{items.player_1[0].name}</td>
                                <td>{items.player_2[0].name}</td>
                                
                                {items.Accept==="true"?<td>Accepted</td>: items.Accept ==="decline"? <td>Declined</td>:<td>Pending</td>}
                                
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
            </div>
 </>
}
    </div>
    </div>
    </div>
</> 
 )
}




export default DuelStatus