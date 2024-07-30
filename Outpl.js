import React from "react";
import {Link} from "react-router-dom";
import './About.css';


const Outpl=()=>{
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
    <h2 className="cap">A Colorful Garden=Satisfaction</h2>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col">
        <h3 className="cap2">Anthorium</h3>
      <img src="https://www.ikea.com/in/en/images/products/spathiphyllum-potted-plant-peace-lily__0611636_pe686865_s5.jpg?f=s" alt="" width="80%"/>
    </div>
    <div class="col">
        <h3 className="cap2">Money Plant</h3>
      <img src="https://www.ikea.com/in/en/images/products/epipremnum-potted-plant-golden-pothos__0492128_pe625482_s5.jpg?f=xl" alt="" width="95%"/>
      
    </div>
    <div class="col">
    <h3 className="cap2">Codiaeum</h3>
    <img src="https://www.ikea.com/in/en/images/products/codiaeum-potted-plant-croton__0611639_pe686868_s5.jpg?f=xl" alt="" width='77%' />
    </div>
  </div>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col" >
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
export default Outpl;