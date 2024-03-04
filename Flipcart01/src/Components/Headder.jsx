
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    // Search Link 
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

    <div className="container-fluide sticky-top bg-light p-3" >
    <div className="row ">
        <div className="col-md-2  col-12 d-flex justify-content-center">
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
            <div className="p-2  ">
                <i className="fa-solid fa-calendar-days"></i>
                Become a Seller
            </div>
            <div className="p-2">
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    </div>
</div>
<div className="container-fluid  " >       

<ul className="nav nav-pills nav-fill " >
     <li className="nav-item">
      <NavLink to="" className={({isActive})=> `${isActive ?  'text-primery' : 'text-dark'} p nav-link `} style={{textDecoration : 'none'}}> Home</NavLink>
     </li>

     <li className="nav-item">
      <NavLink to="/Kids" className={({isActive})=> `${isActive ?  'text-primery' : 'text-dark'} p nav-link `} style={{textDecoration : 'none'}}> Kids</NavLink>
      </li>
      
      <li className="nav-item">
      <NavLink to="/mens" className={({isActive})=> `${isActive ?  'text-primery' : 'text-dark'} p nav-link `} style={{textDecoration : 'none'}}> Mans</NavLink>
      </li>
  
      <li className="nav-item">
      <NavLink to="/womens" className={({isActive})=> `${isActive ?  'text-primery' : 'text-dark'} p nav-link `} style={{textDecoration : 'none'}} >Womens</NavLink>
     </li>
   
     <li className="nav-item">
      <NavLink to="/electronics" className={({isActive})=> `${isActive ?  'text-primery' : 'text-dark'} p nav-link `} style={{textDecoration : 'none'}}>Electrics</NavLink>
     </li>

     <li className="nav-item">
      <NavLink to="/Mobiles" className={({isActive})=> `${isActive ?  'text-primery' : 'text-dark'} p nav-link `} style={{textDecoration : 'none'}}>Mobile</NavLink>
     </li>

      </ul>
    </div>

    </>
  );
}

export default Header;