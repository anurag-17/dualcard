import React, {useEffect, useState} from "react";
import { Link , useNavigate} from "react-router-dom";
// import imga from "../images/Logo.png"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Card, Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
const [show,setShow] = useState(false)
const navigate  = useNavigate()
const data = JSON.parse(localStorage.getItem("nftuser"))
console.log(data)
const logoutuser = () => {
  localStorage.removeItem("nftuser");
  navigate("/register");
};


  return (
    <div>
        <div className='container-fluid topheader desktop-nav fixed-top'>
        <div className='container'>
         <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to = "/">
                    <img src={'/Logo.png'} alt=""></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu">
                <li className="nav-item" to="/">                    
                    <Link  to="BuyDuelCard" className="nav-link" aria-current="page">BuyDuelCard</Link>
                    </li>                    
                    <li className="nav-item" onClick={()=>navigate("/Marketplace")} to='/Marketplace'>                                        
                    <Link  to="Marketplace" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Marketplace</Link>
                    </li>     
                    <li className="nav-item" onClick={()=>navigate("/DuelSomeone")} to='/DuelReceived'>                                        
                    <Link  to="/DuelSomeone" className="nav-link"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Duel Someone</Link>
                    </li> 
                    <li className="nav-item" onClick={()=>navigate("/AboutRules")} to='/AboutRules'>                                        
                    <Link  to="/AboutRules" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About / Rules</Link>
                    </li>  
                    <li className="nav-item" onClick={()=>navigate("/ICOInformation")} to='/ICOInformation'>                                        
                    <Link  to="ICOInformation" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">ICO Information</Link>
                    </li>  
                    <li className="nav-item" onClick={()=>navigate("/DuelAccepted")} to='/DuelAccepted'>                                        
                    <Link  to="DuelAccepted" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">DuelAccepted</Link>
                    </li>      
                    <li className="nav-item" onClick={()=>navigate("/Auction")} to='/Auction'>                                        
                    <Link  to="Auction" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Auction</Link>
                    </li>                                 
                     
                </ul>
                <form className="d-flex">  
              
                  {
                    localStorage.getItem("nftuser")?
                    <div>

                    <Link to="/profile">
                      
                    <button className="btn btn-outline head-btn" type="submit">{data.user.username}</button>
                    </Link>
                    <button className="btn btn-outline head-btn" style={{marginLeft:"10px"}}  onClick={logoutuser}>logout</button>
                    {/* <button onClick={logoutuser}>logout</button> */}
                    </div>
                    :
                    <Link to="/register">
                    <button className="btn btn-outline head-btn" type="submit">SignIn </button>
                    </Link>
                  
                    
                  }
                             
                </form>
                </div>
            </div>
            </nav>
            </div>
        </div>
        <div className="mobile-nav fixed-top">
        {[false,].map((expand) => (
        <Navbar key={expand}  expand={expand}>
          <Container fluid>
            <Navbar.Brand href="#">
            <a className="navbar-brand" href="">
                    <img src='./Logo.png'></img>
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="BuyDuelCard">BuyDuelCard</Nav.Link>
                  <Nav.Link href="Marketplace">Marketplace</Nav.Link>
                  <Nav.Link href="DuelSomeone">Duel Someone</Nav.Link>
                  <Nav.Link href="AboutRules">About / Rules</Nav.Link>
                  <Nav.Link href="ICOInformation">ICO Information</Nav.Link>
                </Nav>
                <form className="d-flex">                    
                    <button className="btn btn-outline head-btn" type="submit">SignIn btn</button>
                    <button className="btn btn-outline head-btn" type="submit">SignIn btn</button>
                </form>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        ))}
        </div>
    </div>
    
  )
}

export default Header ;
