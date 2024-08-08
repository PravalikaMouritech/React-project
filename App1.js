
import React from 'react';
import {  Route, Routes, BrowserRouter,Link } from 'react-router-dom';
import ArtworkList from './ArtworkList';
import ArtworkDetail from "./ArtworkDetails";
import "./Style1.css"
const App1 = () => {
  return (
    <BrowserRouter>
 
   
      <nav className="navbar1 navbar-expand-lg" id="nav"style={{paddingTop:'30px' }} >
        <div className="container-fluid">
         
          <Link className="navbar-brand" to="ArtworkList/" id="logo"
          >
            {/* <img src={pic} alt="" width="30px" />/ */}
            <span className='app-title ' ><b>MY Books Gallery</b></span>
          </Link>
 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <Link className="nav-link text-light" to="/ArtworkList">
                  {/* <b>GALLERY</b> */}
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/a">
                  Contact
                </Link>
              </li> */}
              </ul>
              </div>
        </div>
      </nav>
 
     
 
      <Routes>
        <Route path="/" element={<ArtworkList />}  style={{ textDecoration: 'none' }} />
        <Route path="/ArtworkList" element={<ArtworkList />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
      </Routes>
   
   
 
 
    </BrowserRouter>
  );
};export default App1;