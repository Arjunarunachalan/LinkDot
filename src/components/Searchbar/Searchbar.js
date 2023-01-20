import React from 'react'
//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaYoutube} from 'react-icons/fa'
import "./Searchbar.css"


function Searchbar() {
  return (
    <div>
       


          <Form >
            <input type="text" placeholder='enter something' className="d-flex"></input>
            <button>search</button>
        
        
          
          </Form>
      
          <FaYoutube />


    </div>
  )
}

export default Searchbar