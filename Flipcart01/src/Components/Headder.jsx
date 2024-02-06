import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    // Search Link 
    <>
    <div className="container-fluide sticky-top bg-light pb-2" >
    <div className="row ">
        <div className="col-md-2 pt-3">
            
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
            
        </div>
        <div className="col-md-5 col-sm-5 pt-3  d-flex justify-content-center" >
            
            <i className="fa-solid fa-magnifying-glass input-group-text pt-2"></i>
            <input className="form-control" type="text" placeholder="Search for products, Brand and more"/>

        </div>
        <div className="col-md-5 col-sm-5 d-flex justify-content-end">   
            <div className="dropd-own  pt-2"  >
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

            <div className="p-3 ">
                <i className="fa-solid fa-cart-shopping"></i>
                Cart
            </div>
            <div className="p-3 ">
                <i className="fa-solid fa-calendar-days"></i>
                Become a Seller
            </div>
            <div className="p-3">
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    </div>
</div>
//  Section 
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-md-3 col-3">
          <NavLink to="/kids" className={({isActive})=>`#${isActive ? "text-success" :"text-dark"}h5 text-dark`}>Kids</NavLink>
        </div>
        {/* <div className="col-md-3 col-3">
          <NavLink to="/mens" className="h5 text-dark">Man's</NavLink>
        </div>
        <div className="col-md-3 col-3">
          <NavLink to="/womens" className="h5 text-dark">Womens</NavLink>
        </div>
        <div className="col-md-3 col-3">
          <NavLink to="/electronics" className="h5 text-dark">Electrics</NavLink>
        </div> */}
      </div>
    </div>
    </>
  );
}

export default Header;
