import React from 'react';
// import { useSelector } from 'react-redux/es/exports';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'



const Header = () => {
  // const amount = useSelector(state => state.amount);
  // console.log(amount)

  



  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3" >GAMEZONE</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
          </Nav>
        </Container>
      </Navbar>
      {/* <div className='balance my-4'>
        <button>your Balane :{amount}</button>
      </div> */}

    

    </>
  )
}

export default Header
