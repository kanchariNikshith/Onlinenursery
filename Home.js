import React from "react";
import {Link} from "react-router-dom";
import './About.css';


const Home=()=>{
    
   return (


 
    //  <ul>
    //     <li>
    //         <Link to='/'>Home</Link></li>
    //     <li><Link to='/about'>About</Link></li>
    // </ul>

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
<div className="head1"></div>
     <h1 className="Header">Comfort your Home with Green</h1>
     <div>
     <div class="container text-center">
  <div class="row">
    <div class="col">
       <h1 className="h11">Indoor Plants</h1>
       {/* <img src="https://www.gardenanalyst.com/wp-content/uploads/2019/04/Snake-Plant.jpg" alt="" width="50%"/> */}
<img src="https://img.freepik.com/premium-photo/indoor-plants-pot-isolated-white-background_158502-323.jpg?w=2000" alt="" width="70%" />
       
    </div>
    <div class="col">
      <h1 className="h11">Succulents</h1>
     {/* <img src="https://th.bing.com/th/id/OIP.sT-sEZivWbLJjEwgeO5L9QHaLH?rs=1&pid=ImgDetMain" alt="" width='58%' /> */}
     <img src="https://th.bing.com/th/id/OIP.ZrmdC7odB83mRWk7Fx55FQHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3" alt="" width="80%"/>
    </div>
    <div class="col">
    <h1 className="h11">Outdoor Plants</h1>
    <img src="https://www.ikea.com/in/en/images/products/anthurium-potted-plant-flamingo-plant-red__0614377_pe686883_s5.jpg?f=xl" alt="" width="300px" length="50%"/>

    </div>
  </div>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col"><Link to ='/inpl'>
    <button type="button" class="btn btn-outline-success">Click Me</button></Link>
    </div>
    <div class="col"><Link to='/Newpl'>
    <button type="button" class="btn btn-outline-success">Click Me</button></Link>
    </div>
    <div class="col"><Link to='/Outpl'>
    <button type="button" class="btn btn-outline-success">Click me</button></Link>
    </div>
  </div>
</div>
     </div>
     </>
    )
}
export default Home;