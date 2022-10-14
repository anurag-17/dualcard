import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from './Card';


export const Admin = () => {
    const [usercount,setUserCount] = useState()
    const [userdata,setuserdata] =useState([])

    const getuserdata = async()=>{
        const res = await axios.post("/api/auth/getuserdata");
        setuserdata(res.data)
        setUserCount(res.data.length)
    }

    useEffect(()=>{
getuserdata()
    },[])

  return (
    <div>

<div style  = {{minHeight:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
<Card user={usercount} title = "Users" subtitle = "Registered"/>
<Card/>
<Card/>
<Card/>
</div>
<table className='table table-bordered'>

<thead style = {{color:"white"}}>
    <tr>
  <th>Users</th>
  <th>Challenges</th>
  <th>Challenges Won</th>
  <th>Challenges Lost</th>
  <th>Manual Reviews</th>
    </tr>

</thead>

<tbody>
{
    userdata.map((items,index)=>{
        return(
            <tr>
<td>{items.username}</td>
</tr>   
            )
    })
}



</tbody>
</table>
    </div>
  )
}

