import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'

export const Thankyou = () => {
  return (
    <>
    <Header/>
  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:'100vh',width:"100%"}}>

<div className="content">
  <div className="wrapper-1">
    <div className="wrapper-2" style={{textAlign:"center"}}>
      <h1>Thank you !</h1>
      <p>wait for accepting reqest</p>
      <p>you should receive a confirmation email soon</p>
      <Link to ="/">
      <button className="go-home">
      go home
      </button>
      </Link>
    </div>
</div>
</div>
  </div>  
    {/* <Footer/> */}
{/* <Footer/> */}
    </>
  )
}
