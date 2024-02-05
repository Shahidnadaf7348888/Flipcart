import React from 'react';

import E1 from './IMG/E1.jpg'
import E2 from './IMG/E2.jpg'
import E3 from './IMG/E3.jpg'
import E4 from './IMG/E4.jpg'
import E5 from './IMG/E5.jpg'
import E6 from './IMG/E6.jpg'
import E7 from './IMG/E7.jpg'
import E8 from './IMG/E8.png'
import E9 from './IMG/E9.png'
import E10 from './IMG/E10.jpg'
import E11 from './IMG/E11.jpg'

export default function Home() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
  return (
    <>

    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        
        {/* <!-- fontawsom cdn --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <title>Document</title>
    
        {/* <!-- ovel carosel CDN   --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    
        {/* <!-- Headder --> */}
        
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
        
        
        {/* <!---------------------- carousel  ----------------------> */}
        
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1500">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/44aca2d5a1b175ee.jpg?q=20" className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20" className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/699179052a849b19.jpeg?q=20" className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ca2843e62171405e.jpg?q=20" className="d-block w-100" alt=""/>
              </div>
            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-contulrol-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          
          {/* <!-- Best Of Electronics  --> */}
        
          <div className="container-fluide p-3 mt-4 bg-light">
              <h4>Best of Electronics</h4>
          <div className="owl-carousel owl-theme pt-3 text-center ">
            <div className="item card">
                <img src={E1} className="card-img-top" alt=""/>
                Camera <br/> <h6>$899</h6>
                
                
            </div>
            <div className="item card">
                <img src={E2} className="card-body" alt=""/>
                Apple Monitor <br/> <h6>$1499</h6>
            </div>
            <div className="item card">
                <img src={E3} className="card-body" alt=""/>
                Apple Monitor <br/> <h6>$949</h6>
            </div>
            <div className="item card">
                <img src={E4} className="card-body" alt=""/>
                 Monitor <br/> <h6>$989</h6>
            </div>
            <div className="item card">
                <img src={E5} className=" card-body" alt=""/>
                Projector <br/> <h6>from $999</h6>
            </div>
            <div className="item card">
                <img src={E6} className="card-body" alt=""/>
                Scanner <br/> <h6>from $1300</h6>
            </div>
            <div className="item card">
                <img src={E7} className="card-body" alt=""/>
                TeliPhone <br/> <h6>from $390</h6>
            </div>
            <div className="item card" >
                <img src={E8} style={{width: "9rem"}} className="card-body" alt=""/>
                HD Monitor <br/> <h6>from $1499</h6>
            </div>
            <div className="item card" >
                <img src={E9} style={{width: "9rem"}} className="card-body" alt=""/>
                Cannon H46 <br/> <h6>from $989</h6>
            </div>
            <div className="item card" >
                <img src={E10} style={{width: "8rem" }}className="card-body" alt=""/>
                Shaver <br/> <h6>from $490</h6>
            </div>
            <div className="item card" >
                <img src={E11} style={{width: "9rem"}} className="card-body" alt=""/>
                Memory Drive <br/> <h6>from $567</h6>
            </div>
        </div>
        </div>
        
         {/* <!-- Beautym,Food,Toys & more --> */}
         
         <div className="container-fluide p-3 mt-4 bg-light">
             <h4>Beautym,Food,Toys & more</h4>
          <div className="owl-carousel owl-theme pt-3 text-center ">
            <div className="item card  alighn-item-center">
                <img src="IMG/F9.jpg" style={{padding: "1.9rem 0"}} className="card-img-top" alt=""/>
                Headphone <br/> <h6>$99</h6>  
            </div>
            <div className="item card">
                <img src="IMG/F11.jpg" style={{width: "12rem", paddingBottom: "4rem" }} className="card-body" alt=""/>
                Beauty Products <br/> <h6>$250</h6>
            </div>
            <div className="item card" style={{overflow: "hidden"}}>
                <img src="IMG/F8.webp"  style={{padding: "2rem 0"}} className="card-body" alt=""/>
                Vegitable <br/> <h6>$130</h6>
            </div>
            <div className="item card">
                <img src="IMG/F4.jpg" style={{padding: "2.1rem 0"}} className="card-body" alt=""/>
                 Cycle <br/> <h6>$499</h6>
            </div>
            <div className="item card">
                <img src="IMG/F5.jpg" style={{padding: "2rem 0"}} className=" card-body" alt=""/>
                Apples <br/> <h6>100</h6>
            </div>
            <div className="item card">
                <img src="IMG/F6.jpg" style={{padding: "2rem 0"}} className="card-body" alt=""/>
                Guitar <br/> <h6>from $1200</h6>
            </div>
            <div className="item card">
                <img src="IMG/F7.jpg" style={{padding: "2.2rem 0"}} className="card-body" alt=""/>
                Teddy Bear <br/> <h6>from $87</h6>
            </div>
            <div className="item card" style={{overflow: "hidden"}} >
                <img src="IMG/F3.jpg" style={{width: "13.6rem "}} className="card-body" alt=""/>
                Pen and Books <br/> <h6>from $340</h6>
            </div>
            <div className="item card" >
                <img src="IMG/F2.jpg"  className="card-body" alt=""/>
                Nescafe <br/> <h6>from $89</h6>
            </div>
            <div className="item card" >
                <img src="IMG/F1.jpg"  className="card-body" alt=""/>
                Dry fruits <br/> <h6>from $190</h6>
            </div>
            <div className="item card" >
                <img src="IMG/F10.jpg" style={{padding: "2rem 0"}} className="card-body" alt=""/>
                Childern Toys <br/> <h6>from $330</h6>
            </div>
        </div>
        </div>
        
        {/* <!-- Sports, Healthcare & more   --> */}
        
        <div className="container-fluide p-3 mt-4 bg-light">
            <h4>Sports, Healthcare & more </h4>
         <div className="owl-carousel owl-theme pt-3 text-center ">
           <div className="item card  alighn-item-center">
               <img src="IMG/G13.jpg" style={{padding: "1.5rem 0"}} className="card-img-top" alt=""/>
               8Kg Orange Dumbells  <br/> <h6>$50</h6>  
           </div>
           <div className="item card">
               <img src="IMG/G1.jpg" style={{width: "15rem", padding: "1rem 0px "}} className="card-body" alt=""/>
               Yoga Carpet <br/> <h6>$69</h6>
           </div>
           <div className="item card" style={{overflow: "hidden"}}>
               <img src="IMG/G3.jpg" style={{padding: "1.5rem 0"}} className="card-body" alt=""/>
               Drinking bottle <br/> <h6>$59</h6>
           </div>
           <div className="item card">
               <img src="IMG/G4.jpg" style={{padding: "1.5rem 0"}} className="card-body" alt=""/>
                Sport T-Shirt <br/> <h6>$249</h6>
           </div>
           <div className="item card">
               <img src="IMG/G5.jpg" style={{padding: "1.5rem 0"}} className=" card-body" alt=""/>
               Supliment Bottle <br/> <h6>from $110</h6>
           </div>
           <div className="item card">
               <img src="IMG/G6.jpg" style={{padding: "2.2rem 0"}} className="card-body" alt=""/>
               Masage Products <br/> <h6>from $549</h6>
           </div>
           <div className="item card">
               <img src="IMG/G7.jpg" style={{padding: "2.9rem 0"}} className="card-body" alt=""/>
               Vitamin pills <br/> <h6>from $37</h6>
           </div>
           <div className="item card" >
               <img src="IMG/G8.jpg" style={{width: "10rem"}} className="card-body" alt=""/>
              G-Chomanbrash <br/> <h6>from $80</h6>
           </div>
           <div className="item card" >
               <img src="IMG/G9.jpg" style={{padding: ".4rem 0"}} className="card-body" alt=""/>
               Energy Pills <br/> <h6>from $989</h6>
           </div>
           <div className="item card" >
               <img src="IMG/G10.jpg"  className="card-body" alt=""/>
               Mackup Products <br/> <h6>from $100</h6>
           </div>
           <div className="item card" >
               <img src="IMG/G11.jpg" style={{padding: "2rem 0"}} className="card-body" alt=""/>
               Black Dumbells <br/> <h6>from $450</h6>
           </div>
        </div>
        </div>
        
         
        <div className="container-fluide p-4 bg-light mt-3 " >
            <div className="row ">
                {/* <!-- shop of Your love  --> */}
                <div className="col-md-4  pt-2">
                    <h4 className='ps-2'>Shop of Your love</h4>
                    <div className="row">
                        <div className="col-md-6 card ">
                            <img src="IMG/H1.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Men's Sport Shows</h5>
                                <b className="h5 text-success">Min. 70% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card">
                            <img src="IMG/H2.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Men's Sport Shows</h5>
                                <b className="h5 text-success">Min. 70% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card " >
                            <img src="IMG/H3.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Men's T-shirts</h5>
                                <b className="h5 text-success">Min. 50% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card" >
                            <img src="IMG/H4.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Men's Sandals </h5>
                                <b className="h5 text-success">Min. 70% off</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-2 ps-4">
                    <h4>Home Decor & Furnishings</h4>
                    <div className="row">
                        <div className="col-md-6 card ">
                            <img src="IMG/H5.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Wall Clocks</h5>
                                <b className="h5 text-success">Min. 50% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card">
                            <img src="IMG/H6.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Blankets</h5>
                                <b className="h5 text-success">Min. 50% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card">
                            <img src="IMG/H8.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Blubs</h5>
                                <b className="h5 text-success">New Range</b>
                            </div>
                        </div>
                        <div className="col-md-6 card">
                            <img src="IMG/H9.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Mats</h5>
                                <b className="h5 text-success">Min. 50% off</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 " >
                    <div className="" style={{backgroundImage:"url('IMG/H10.jpg')", backgroundSize: "cover" ,padding: "8.5rem 3rem"}} >
                        <h1 className="text-light">Shop Your  <br/> fashion Needs</h1>
                        <p>with latest & <br/> Trending choices</p>
                        <div className="btn btn-primary">Shop</div>
                    </div>
        
                </div>
            </div>
        </div>
        
        {/* <!-- Never Before Prices on Fashion --> */}
        <div className="container-fluide p-3 mt-4 bg-light">
            <h4>Never Before Prices on Fashion</h4>
         <div className="owl-carousel owl-theme pt-3 text-center ">
           
            <div className="item card ">
               <img src="IMG/L11.jpg" style={{padding: "1.5rem 0"}} className="card-img-top" alt=""/>
               Ladies sandle <br/> <h6>from $230</h6>  
           </div>
           
           <div className="item card">
               <img src="IMG/L8.jpg" style={{padding: "1.5rem 0px"}} className="card-body" alt=""/>
               Cool bagpack <br/> <h6>from $69</h6>
           </div>
           <div className="item card" >
               <img src="IMG/L1.jpg" style={{width: "7.8rem", margin:" 0 auto " }}className="card-body " alt=""/>
               Zara Pant <br/> <h6>from $450</h6>
           </div>
           <div className="item card">
               <img src="IMG/L2.jpg" style={{padding: "1.4rem 0"}} className="card-body" alt=""/>
               red long dress<br/> <h6>from $649</h6>
           </div>
           <div className="item card">
               <img src="IMG/L3.jpg" style={{padding: ".5rem 0"}} className=" card-body" alt=""/>
               Red flawer Dress <br/> <h6>from $910</h6>
           </div>
           <div className="item card">
               <img src="IMG/L5.jpg" style={{padding: "1.4rem 0"}} className="card-body" alt=""/>
              Sun Shine Jewelry<br/> <h6>from $1999</h6>
           </div>
           <div className="item card">
               <img src="IMG/L4.jpg" style={{padding: "1.4rem 0"}} className="card-body" alt=""/>
                Pearl <br/> <h6>from $8999</h6>
           </div>
           <div className="item card" >
               <img src="IMG/L6.webp" style={{padding: "2rem 0"}} className="card-body" alt=""/>
              Suraksha piece <br/> <h6>from $99</h6>
           </div>
           <div className="item card" >
               <img src="IMG/L7.jpg" style={{padding: "1.4rem 0"}} className="card-body" alt=""/>
                Jagwar Jeans <br/> <h6>from $499</h6>
           </div>
           <div className="item card" >
               <img src="IMG/L0.jpg" style={{padding: "1.4rem 0"}} className="card-body" alt=""/>
               High Heals <br/> <h6>from $699</h6>
           </div>
           <div className="item card" >
               <img src="IMG/L9.jpg" style={{padding: "2rem 0"}} className="card-body" alt=""/>
               Pinky Heals <br/> <h6>from $458</h6>
           </div>
          
        </div>
        </div>
        
        {/* <!-- Offer Furniture  --> */}
        <div className="container-fluide p-3 mt-4 bg-light">
            <h4>Offers on Furniture</h4>
         <div className="owl-carousel owl-theme pt-3 text-center ">
           
            <div className="item card ">
               <img src="IMG/T1.jpg" style={{padding: "1.5rem 0"}} className="card-img-top" alt=""/>
               Dining Table <br/> <h6>from $1650</h6>  
           </div>
           <div className="item card">
               <img src="IMG/T2.jpg" style={{padding: "1.5rem 0px"}} className="card-body" alt=""/>
               Soofaa & Smooth Chair <br/> <h6>from $1200</h6>
           </div>
           <div className="item card" >
               <img src="IMG/T3.jpg" style={{padding: "1.4rem 0px"}} className="card-body " alt=""/>
                 Kabad <br/> <h6>from $1450</h6>
           </div>
           <div className="item card">
               <img src="IMG/T4.jpg" style={{padding: "1.4rem 0"}} className="card-body" alt=""/>
                Formale Chair <br/> <h6>from $499</h6>
           </div>
           <div className="item card">
               <img src="IMG/T5.jpg" style={{width: "10.7rem"}} className=" card-body" alt=""/>
               Soft Sofa <br/> <h6>from $1910</h6>
           </div>
           <div className="item card">
               <img src="IMG/T6.jpg" style={{width: "10.7rem"}} className="card-body" alt=""/>
              Rotating Chair<br/> <h6>from $1499</h6>
           </div>
           <div className="item card">
               <img src="IMG/T8.jpg" style={{padding: "1rem 0"}} className="card-body" alt=""/>
                Fancy Sofa <br/> <h6>from $1999</h6>
           </div>
           <div className="item card" >
               <img src="IMG/T7.jpg" style={{padding: "1.4rem 0"}} className="card-body" alt=""/>
              Office Counter <br/> <h6>from $1599</h6>
           </div>
           <div className="item card" >
               <img src="IMG/T0.jpg" style={{padding: "1.4rem 0"}} className="card-body" alt=""/>
                dubble Bed  <br/> <h6>from $1499</h6>
           </div>
           <div className="item card" >
               <img src="IMG/T11.jpg" style={{padding: "1.5rem 0"}} className="card-body" alt=""/>
                Single Bed<br/> <h6>from $1099</h6>
           </div>
           <div className="item card" >
               <img src="IMG/T12.jpg" style={{padding: "1.5rem 0"}} className="card-body" alt=""/>
               Somooth Pillow <br/> <h6>from $458</h6>
           </div>
          
        </div>
        </div>
        
        
        {/* <!-- Travel Essential Picks --> */}
        <div className="container-fluide p-4 bg-light mt-3">
            <div className="row ">
                <div className="col-md-4 col-6 ">
                    <div className='ps-2 h4'>Travel Essential Picks</div>
                    <div className="row">
                        <div className="col-md-6 card pt-4 pb-4">
                            <img src="IMG/S5.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Torch</h5>
                                <b className="h5 text-success">Min. 50% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card pt-4 pb-4">
                            <img src="IMG/S6.jpg"  className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Golden Heart</h5>
                                <b className="h5 text-success">Min. 70% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card pt-4 pb-5 " >
                            <img src="IMG/S9.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Taitan Watch</h5>
                                <b className="h5 text-success">Min. 50% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card pt-4 pb-4" >
                            <img src="IMG/S8.jpg"  className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Men's Shows </h5>
                                <b className="h5 text-success">Min. 70% off</b>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* <!-- Must-have Electronics & Appliances --> */}
    
                <div className="col-md-4 col-6  ps-4">
                    <div className="h4">Must-have Electronics </div>
                    <div className="row">
                        <div className="col-md-6 card ">
                            <img src="IMG/S1.jpg"  className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Smartt Watch</h5>
                                <b className="h5 text-success">Min. 50% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card">
                            <img src="IMG/S2.jpg"  className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Head Phones</h5>
                                <b className="h5 text-success">Min. 70% off</b>
                            </div>
                        </div>
                        <div className="col-md-6 card">
                            <img src="IMG/S3.jpg" className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>EarBurds</h5>
                                <b className="h5 text-success">New Range</b>
                            </div>
                        </div>
                        <div className="col-md-6 card">
                            <img src="IMG/S4.jpg"   className="card-body" alt=""/>
                            <div className="ps-3">
                                <h5>Vivo Y20</h5>
                                <b className="h5 text-success">Min. 70% off</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 " >
                    <div className="" style={{backgroundImage:"url('IMG/S0.jpg')", padding: "12rem 4rem", backgroundSize: "auto"}} >
                        <h1>Shop Your  <br/> fashion Needs</h1>
                        <p style={{color:"rgb(5, 5, 5)"}} >with latest & <br/> Trending choices</p>
                        <div className="btn btn-primary">Shop</div>
                    </div>
        
                </div>
            </div>
        </div>
        
        {/* <!-- Links  --> */}
        <div className="container-fluide p-4">
          <b className="h4">Top Stories: Brand Directory</b>
          <br/>
          <p><b>MOST SEARCHED FOR ON FLIPKART: </b> valentines day gifts | Fresh Flower Delivery | iPhone 15 | IPhone 15 Plus | iPhone 15 Pro | iPhone 15 Pro Max | Vivo x 100 | Spoyl Store | SAMSUNG FlipS | SAMSUNG Foid5 Flipkart Axis Bank Super Elite Credit card | 5G Mobile Phones | Primebook Laptops | Moto Edge 40 | Grievance Redressal | OPPO Reno? Pro 5G | IPhone 13 | Help Centre Track Orders | Manage Orders Return Orders | Gift Cards Store | Flipkart Axis Bank Credit Card | Pay Later</p> 
        
          <p><b>MOBILES</b> Samsung Galaxy S24 50 | Samsung Galaxy S24+5G IPhone 12 64GB | iPhone 12 Pro 512GB | iPhone 12 128GB | Vivo Y15 | SAMSUNG Galaxy S21 FE 5G | Infinix HOT 301 | Realme 10 Pro 5G | MOTOROLA G62 5G | Nothing Phone | REDMI Note 12 Pro 5G | Infinix SMART 7 | Vivo Y12 | Oppo A12 Motorola 5g Phone Realme 5g Smartphone Apple 5g Phone | Iqoo Sg Phones | Oneplus 5g Phanes | Vivo 5g Phones | Oppo 5g Smart Phones | Oppo F15 | Oppo A31 | Samsung A71 | Samsung A51 | Samsung A31 | iPhone 11 | iPhone 11 Pro | 4G Mobile | Nokia Mobile | Samsung Mobile | Iphone | Oppo Mobile | Vivo Mobile</p>
          <p><b>CAMERA</b> GoPro Action Camera Nikon Camera Canon Camera Sony Cameris Samsung A31 Nikon DSLR</p>
          <p><b>LAPTOPS</b> Asus ROG Ally | MacBook Pro M2 | Premium Laptop ASUS ROG Strix SCAR 16 (2023) Core 19 13th Gen ASUS ROG Zephyrus M16 (2023) Core 19 13th Gen | ASUS Zenbook 14 OLED (2022) | Reaime Book Prime Core i5 11th Gen | Microsoft Surface Go Pentium 128GB | Apple Laptops | Acer Laptops | Lenovo Laptops | Dell Laptops | Asus Laptops | HP Laptops | Gaming Laptops | 2 in 1 Laptops Laptops | Dell latest
            laptops 2022 HP latest laptops 2022 | Infinix INBook Y1 Plus | SAMSUNG Galaxy Book3] 12th Gen Intel Core Laptops</p>
            
            <p><b>TVS</b> LARGE APPLIANCES: Television | Washing Machines | Refrigerators | Air Conditioners | Electric Cookers | Electric Jug(Heater) / Travel Ketties | Induction Cooktops | Inverters/stabilizer Irons / Iron Box | Mixer Grinder Juicer Wet Grinders | Chimneys | Microwave Ovens | Vacuum Cleaners | Water Purifier | Fan</p>
            <p><b>LARGE APPLIANCES:</b> Television | Washing Machines | Refrigerators | Air Conditioners | Electric Cookers | Electric Jug(Heater) / Travel Ketties | Induction Cooktops | Inverters/stabilizer Irons / Iron Box | Mixer Grinder Juicer Wet Grinders | Chimneys | Microwave Ovens | Vacuum Cleaners | Water Purifier | Fan</p>
        
            <p><b>CLOTHING</b> Green bridal lehenga | Tops | Shoes | Sunglasses Bridal Blouse | Half saree blouse designs | Designer blouses | Blouse designs | Shirts | Cotton saree blouse
                designs Tshirts Jeans | Sarees | Dresses | One pieces | Groom wedding sherwani | Designer Salwar Suits Bra | Cotton simple blouse designs Banarasi saree blouse designs | Stylish blouse astin design | Track Pant Blouse neck designs | Men Kurtas | Party Dresses Palazzo Suits Anarkali | Gowns Cut out dress | Salwar Suits | Kurtis | Designer Sarees Leggings Shorts | Georgette Sarees Ethnic Wear uppada pattu</p>
        
                <p><b>FOOTWEAR </b> Adidas Shoes Reebok Shoes Nike Shoes | Puma Shoes | Boots Bata Shoes | Woodland Shoes | Skechers Shoes | Sneakers | Womens Boots Sports Shoes Loafers Sandals | Lotto Sports Shoes Casual Shoes Womens Skechers Shoes Asics Sports Shoes Formal Shoes School Shoes</p>
        
                <p>GROCERIES PhonePe Grocery Voucher | Hand Wash | Soap | Cashew Nuts | Sunflower Oil Eggs Toillet Cleaner Harpic Toilet Cleaner Dettol Soap | Mustard Oil Biscuits | Cheese | Patanjali Atta | Fortune
                    Dil Aashirvaad Atta | Tea</p>
        
            <p><b>BEST SELLING ON FLIPKART</b> Headphones | Best Gas Geyser | Kitchen Geyser Nutri Blenders | Portable Air Cooler | Best Air Cooler Bags | Hitachi Refrigerator 3 Door | Books | Toys Candles | Helmets | Wall Clocks | Baby Food | Chocolates | Cycles | Calculators | Lipsticks | Mask | Vertiv UPS | Fastrack Watches | Wallets | Earrings | Gold Coins | Realme Pad Mini | Handtags | conekt SW2 Smartwatch | Mivi DuoPods a350 Speaker Cleaner</p>
        
            <p><b>FURNITURE</b> Furniture | Sofas Beds | Dining sets | Wardrobes | Mattresses TV Units | Tables | Chairs Shelves | Bean Bags Office Chairs | Computer Table | Office Tables Red Sofa | Wakefit Beds | White Sofa Wakefit Mattress Green Sofa Black Sofa Brown Sota</p>
        </div>
        
        {/* <!-- Footer  --> */}
        
        <div className="container-fluide bg-dark text-light p-5" >
            <div className="row">
                <div className="col-md-2 col-6">
                    <p className="p" style={{color: "rgb(148, 99, 36)"}}>ABOUT</p>
                    <br/>
                    <div className='h6'>Contact Us</div>
                    <div className='h6'>About Us</div>
                    <div className='h6'>Careers</div>
                    <div className='h6'>Flipkart Stories</div>
                    <div className='h6'>Press</div>
                    <div className='h6'>Flipkart Wholesale</div>
                    <div className='h6'>Cleartrip</div>
                    <div className='h6'>Corporate Information</div>
                </div>
                <div className="col-md-2 col-6">
                    <p style={{color: "rgb(148, 99, 36)"}}>HELP</p>
                    <br/>
                    <div className='h6'>Payments</div>
                    <div className='h6'>Shipping</div>
                    <div className='h6'>Cancollection &</div>
                    <div className='h6'>Returns</div>
                    <div className='h6'>FAQ</div>
                    <div className='h6'>Report Infringement</div>
                </div>
                <div className="col-md-2 col-6">
                    <div  style={{color: "rgb(148, 99, 36)"}}>CONSUMER POLICY</div>
                    <br/>
                    <div className='h6'>Cancollection &</div>
                    <div className='h6'>Returns</div>
                    <div className='h6'>Terms of Use</div>
                    <div className='h6'>Security</div>
                    <div className='h6'>Privacy</div>
                    <div className='h6'>Sitemap</div>
                    <div className='h6'>Grievance Redressal</div>
                    <div className='h6'>EPR Compliance </div>
                </div>
                <div className="col-md-2 col-6">
                    <div className="p" style={{color: "rgb(148, 99, 36)"}}>SOCIAL</div>
                    <br/>
                    <div className="h6">Facebook</div>
                    <div className="h6">Twitter</div>
                    <div className="h6">YouTube</div>
                </div>
                <div className="col-md-2 col-12" style={{borderLeft: "1px solid rgba(255, 255, 255, 0.274)"}}>
                    <div className="p" style={{color: "rgb(148, 99, 36)"}}>Mail Us:</div>
                    <br/>
                    <div className="h6">Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia & Clove Embassy Tech Village, Karnataka, India Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103,
                        Karnataka, India </div>
                </div>
                <div className="col-md-2 col-12">
                    <div className="p" style={{color: "rgb(148, 99, 36)"}}>Registered Office Address</div>
                    <br/>
                    <div className="h6">Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India
                        CIN: U51109KA2012PTC066107 Telephone: 044-45614700</div>
                </div>
            </div>
        </div>
        
        <div className="container-fluide ps-4 pt-1 bg-dark text-light" style={{fontSize: "80%", borderTop: "1px solid rgba(255, 255, 255, 0.274)"}}>
            <div className="row">
                <div className="col-md-2 col-4 ">
                    <p>Become a Seller</p>
                </div>
                <div className="col-md-2 col-4">
                    <p>Seller Advertise</p>
                </div>
                <div className="col-md-1 col-4">
                    <p>Gift Cards</p>
                </div>
                <div className="col-md-1 col-4">
                    <p>Help Center</p>
                </div>
                <div className="col-md-2 col-6">
                    <p>©2007-2024 Flipkart.com</p>
                </div>
                <div className="col-md-2 col-12 pb-3 pe-5">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt=""/>
                </div>
            </div>
        </div>
        
    
    
    
        </>
  );
}
