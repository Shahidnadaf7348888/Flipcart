import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    // Search Link 
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div className="container-fluide sticky-top bg-light p-3" >
    <div className="row ">
        <div className="col-md-2  ">
          <b className="h3" style={{color : '#147FEA'}}>Flipcart</b>
            <div className="d-flex">
              <b style={{color : '#AEB0B1'}} className='pe-1'>Explore</b><b style={{color :'#F6C314'}}> Plus</b>
            </div>
        </div>
        <div className="col-md-5 col-12 " >
            <div className="container d-flex justify-content-center">
            <i className="fa-solid fa-magnifying-glass input-group-text "></i>
            <input className="form-control" type="text" placeholder="Search for products, Brand and more"/>
            </div>

        </div>
        <div className="col-md-5 col-12 d-flex justify-content-center">   
            <div className="dropd-own  "  >
                <button className="btn  dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-user"></i>
                    Login
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{boxShadow: "1px .5px 11px black", border: "none"}}>
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>

            <div className="p-2 ">
                <i className="fa-solid fa-cart-shopping"></i>
                Cart
            </div>
            <div className="p-2 ">
                <i className="fa-solid fa-calendar-days"></i>
                Become a Seller
            </div>
            <div className="p-2">
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    </div>
</div>
 
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-md-3 col-3">
          <NavLink to="/Kids" className={({isActive})=>`#${isActive ? "text-success" :"text-dark"}h5 text-dark`}>Kids</NavLink>
        </div>
        <div className="col-md-3 col-3">
          <NavLink to="/mens" className="h5 text-dark">Man's</NavLink>
        </div>
        <div className="col-md-3 col-3">
          <NavLink to="/womens" className="h5 text-dark">Womens</NavLink>
        </div>
        <div className="col-md-3 col-3">
          <NavLink to="/electronics" className="h5 text-dark">Electrics</NavLink>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
