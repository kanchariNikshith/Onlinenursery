import React from "react";
import {Link} from "react-router-dom";
import './About.css';
const Newpl=()=>{
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
        <Link to=''>Signup</Link></li>
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
    <h2 className="cap">Thrive the strength of the Desert</h2>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col">
        <h3 className="cap2">Dessert Cacti</h3>
      <img src=" https://th.bing.com/th/id/OIP.WW32hryZf-KvwQ2iH4lM7QHaJ8?w=598&h=803&rs=1&pid=ImgDetMain" alt="" width="71%"/>
    </div>
    <div class="col">
        <h3 className="cap2">Echinopsis oxygona.</h3>
      <img src="https://i.pinimg.com/736x/15/aa/0c/15aa0cd0557f0161d3fbea1bac53cb8e.jpg" alt="" width="67%"/>
      
    </div>
    <div class="col">
    <h3 className="cap2">Snake Plant</h3>
    <img src="https://th.bing.com/th/id/OIP.UaiAXrcbIH7dtvNgri9e3AHaHO?rs=1&pid=ImgDetMain" alt="" width='93%' />
    </div>
  </div>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col">
 <button type="button" class="btn btn-outline-success">$40</button>
    </div>
    <div class="col">
      <button type="button" class="btn btn-outline-success">$55</button>
    </div>
    <div class="col">
   <button type="button" class="btn btn-outline-success">%75</button>
    </div>
  </div>
</div>
</>

)


}
export default Newpl;