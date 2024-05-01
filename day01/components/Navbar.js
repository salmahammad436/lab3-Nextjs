import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';
import Link from 'next/link';
import { NavLink } from 'react-bootstrap';
import { useSession } from 'next-auth/react';
export default function Navbarr() {
  const {data}=useSession();
  useEffect(()=>{
  

  },[]);
  return (<>
   
         
      
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize:'30px', fontWeight:'bold'}}>MOVIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          
          >
            <Link style={{color:"black" ,textDecoration:'none',padding:'5px'}} href="/home">Home</Link>
            <Link  style={{color:"black" ,textDecoration:'none',padding:'5px'}}href="/products">movies</Link>
            <Link  style={{color:"black" ,textDecoration:'none',padding:'5px'}}href="/Courses">courses</Link>
            <Link  style={{color:"black" ,textDecoration:'none',padding:'5px'}}href="/dashboard">dashboardCS</Link>
            <Link  style={{color:"black" ,textDecoration:'none',padding:'5px'}}href="/dashboard-SWR">dashboardSWR</Link>
            <Link  style={{color:"black" ,textDecoration:'none',padding:'5px'}}href="/mornText">Text</Link>
            <form action="/api/auth/signin" method="post">
             <button type="submit">Sign in</button>
            </form>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );}
