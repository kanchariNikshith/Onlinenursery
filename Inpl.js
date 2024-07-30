import React from "react";
import {Link} from "react-router-dom";
import './About.css';


const Inpl=()=>{
return(

<>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Nursery Live</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="about">
        <Link to='/'  >Home</Link>
        </li>
        <li className="nav-item">
        <Link>Track order</Link>
        </li>
        <li>
        <Link to='/Signup'>Signup</Link></li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           List
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/">Order</Link></li>
            <li><Link className="dropdown-item" href="/">Wishlists</Link></li>
            <li><Link className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="/">Offers</Link></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  

</nav>
<div>
    <h2 className="cap">Indoor Plants=More Oxygen</h2>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col">
        <h3 className="cap2">Dracena</h3>
      <img src="https://th.bing.com/th/id/OIP.PybafTA7Rh-srHZpOk2_XgHaJn?rs=1&pid=ImgDetMain" alt="" width="71%"/>
    </div>
    <div class="col">
        <h3 className="cap2">Peace Lily Plant</h3>
      <img src="https://th.bing.com/th/id/OIP._EkBgIP0b7vLmxD91jqq1gAAAA?rs=1&pid=ImgDetMain" alt="" width="67%"/>
      
    </div>
    <div class="col">
    <h3 className="cap2">Aglaonema Maria - Chinese Evergreen</h3>
    <img src="https://cdn.shopify.com/s/files/1/1706/1307/products/Aglaonema-Maria-Chinese-Evergreen-14x30cm-Cecil-Plant-Pot-Taupe-18x17cm-emma_600x.jpg?v=1684485072" alt="" width='93%' />
    </div>
  </div>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col">
 <button type="button" class="btn btn-outline-success">$30</button>
    </div>
    <div class="col">
      <button type="button" class="btn btn-outline-success">$25</button>
    </div>
    <div class="col">
   <button type="button" class="btn btn-outline-success">$35</button>
    </div>
  </div>
</div>
</>

)


}
export default Inpl;