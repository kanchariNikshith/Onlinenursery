// import React from "react";
// import {Link} from "react-router-dom";
// import './About.css';
// const Signup=()=>{
// return(
// <>

//     <div className="box">
//         <div className="content">
//             <div className="heading">
//                 <h1>LOGIN</h1>
//             </div>
//             <hr/>
//                  <form>
//                 <div classNamename="bx">
//                     <span className="box2"><label for="name"><b>Name</b></label></span><br/>
//                     <input type="text" id="name" placeholder="Enter name"/>
//                </div>
//                 <div className="bx">
//                     <span className="box2"><label for="phone"><b>Phone No</b></label></span><br/>
//                     <input type="number" name="phone" id="phone" placeholder="Number"/>
//                 </div>
//                 <div className="bx">
//                     <span className="box2"><label for="password"><b>Password</b></label><br/></span><input
//                         type="password" name="" id="password" placeholder="Password"></input>
//                 </div>
//                 <div className="bx1"><span className="box2"><label for="female"><b>Gender</b></label><br/></span><input
//                         type="radio" id="female" value="Female"/>
//                     <label for="Female">Female</label>
//                     <input type="radio" id="male" placeholder="Male"/>
//                     <label for="Female">Male</label>
//                 </div>
//                 <div className="button"><input type="submit" className="submit"/></div>
//                 </form>
//                </div>
            
//         <div/>
  
// </>
// )
// }
// export default Signup;
// import React from "react";
// import { Link } from "react-router-dom";
// import './About.css';
// const Signup = () => {
//     function data(){
//         var a=document.getElementById("name").value;
//         var b=document.getElementById("phone").value;
//         var c=document.getElementById("password").value;
//         var d=document.getElementById("female").checked;
//         var e=document.getElementById("male").checked;

//         if(a=="" || b=="" || c=="" || (!d && !e)){
//             alert("All Fields are mandatory");
//             return false;
//         }
//         else if(b.length<10||b.length>10){
//                 alert("Number should be of 10 digits");
//                 return false;
//             }
        
//         else{
//          document.write("Your name is: "+a+"<br>");
//          document.write("Your Phone number is"+b+"<br>")
//          document.write("Your Password has been recorded"+"<br>");
//          document.write("REGISTRATION SUCCESSFULL")
//         }
//     }



//     return (
//         <>
//             <div className="box">
//                 <div className="content">
//                     <div className="heading">
//                         <h1>LOGIN</h1>
//                     </div>
//                     <hr/>
//                     <form onSubmit="return data()">
//                         <div className="bx">
//                             <span className="box2"><label htmlFor="name"><b>Name</b></label></span><br/>
//                             <input type="text" id="name" placeholder="Enter name"/>
//                         </div>
//                         <div className="bx">
//                             <span className="box2"><label htmlFor="phone"><b>Phone No</b></label></span><br/>
//                             <input type="number" name="phone" id="phone" placeholder="Number"/>
//                         </div>
//                         <div className="bx">
//                             <span className="box2"><label htmlFor="password"><b>Password</b></label><br/></span>
//                             <input type="password" name="" id="password" placeholder="Password"/>
//                         </div>
//                         {/* <div className="bx1">
//                             <span className="box2"><label htmlFor="female"><b>Gender</b></label><br/></span>
//                             <input type="radio" id="female" value="Female"/>
//                             <label htmlFor="Female">Female</label>
//                             <input type="radio" id="male" placeholder="Male"/>
//                             <label htmlFor="Female">Male</label>
//                         </div> */}
//                         <div className="button">
//                             <input type="submit" className="submit"/>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Signup;
import React, { useState } from "react";
import './About.css';
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        password: ""
    });
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, password } = formData;
        if (name === "" || phone === "" || password === "") {
            alert("All fields are mandatory");
        } else if (phone.length !== 10) {
            alert("Number should be of 10 digits");
        } else {
            alert("Registration successful");
            // console.log("Your name is: " + name);
            // console.log("Your Phone number is: " + phone);
            // console.log("Your Password has been recorded");
            document.write("Your name is "+name+"<br>");
            document.write("Your Phone number is "+phone+"<br>");
            document.write("Your Password is recorded "+"<br>");
            document.write("Thankyou for signing up-You can proceed with the Plant Shopping");
           

        }
    };

    return (
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



        <div className="box">
            <div className="content">
                <div className="heading">
                    <h1>LOGIN</h1>
                </div>
                <hr/>

                <form className="fbox" onSubmit={handleSubmit}>
                    <div className="bx">
                        <span className="box2"><label htmlFor="name"><b>Name</b></label></span><br/>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name"/>
                    </div>
                    <div className="bx">
                        <span className="box2"><label htmlFor="phone"><b>Phone No</b></label></span><br/>
                        <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Number"/>
                    </div>
                    <div className="bx">
                        <span className="box2"><label htmlFor="password"><b>Password</b></label><br/></span>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"/>
                    </div>
                    {/* If gender is needed */}
                    {/* <div className="bx1">
                        <span className="box2"></span><label htmlFor="female"><b>Gender</b></label><br/>
                        <input type="radio" id="female" value="Female"/>
                        <label htmlFor="Female">Female</label>
                        <input type="radio" id="male" placeholder="Male"/>
                        <label htmlFor="Female">Male</label>
                    </div> */}
                    <div className="button">
                        <input type="submit" className="submit"/>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Signup;
