import React from 'react'

const Register_page = () => {
  return (
    <>
    
    <div class="top1">
        <div id="top1_01">
            <a href="D:\Webpage\index.html" id="top1_01_00">AQUA WORLD</a>
        </div>
        <div id="top1_02">
            <a href="D:\Webpage\index.html" style="color: black;"><i class="fa-solid fa-house"></i></a>
            <a href="#" style="color: black;"><i class="fa-solid fa-magnifying-glass"></i></a>
            <a href="#" style="color: black;"><i class="fa-solid fa-truck-fast"></i></a>
            <a href="#" style="color: black;"><i class="fa-solid fa-cart-shopping"></i></a>
            <a href="D:\Webpage\register_page.html" style="color: black;"><i class="fa-solid fa-user" style="color: aqua; -webkit-text-stroke: 2px black;"></i></a>
            <div class="dropdown">
                <button class="btn btn-secondary-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-bars" style="font-size: 25px;"></i>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="file:///D:/Webpage/index.html#middle0">Our Products</a></li>
                  <li><a class="dropdown-item" href="file:///D:/Webpage/index.html#bottom3">Contacts Us</a></li>
                  <li><a class="dropdown-item" href="#">About Us</a></li>
                  <li><a class="dropdown-item" href="#">Shipping Info</a></li>
                  <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                  <li><a class="dropdown-item" href="#">Terms of Service</a></li>
                  <li><a class="dropdown-item" href="#">Refund Policy</a></li>
                </ul>
            </div>  
        </div>
    </div>

     
    <div class="background">
        <video autoplay loop muted plays-inline id="background1">
            <source src="Aquarium Live.mp4" type="video/mp4"/>
        </video>
    </div>


    <div class="center">
        <p id="center1">Sign Up</p>


        <div id="center2">
            <span id="center2_00"><input type="name" placeholder="Username" id="center2_01"/></span>
            <span><i class="fa-solid fa-user"></i></span>
            <div id="center2_02"></div>
        </div>

        <div id="center3">
            <span id="center3_00"><input type="email" placeholder="E-mail" id="center3_01"/></span>
            <span><i class="fa-regular fa-envelope"></i></span>
            <div id="center3_02"></div>
        </div>


        <div id="center4">
            <span id="center4_00"><input type="password" placeholder="Password" id="center4_01"/></span>
            <span><i class="fa-solid fa-lock"></i></span>
            <div id="center4_02"></div>
        </div>


        <div id="center5">
            <span><input type="checkbox" id="center5_01"/></span>
            <span>I agree to the terms & conditions</span>
        </div>


        <div id="center6">
            <p><input type="button" value="Register" id="center6_01"/></p>
        </div>


        <div id="center7">
            <span>Already have an account?</span>
            <span><a href="D:\Webpage\login_page.html" id="center7_01">Login</a></span>
        </div>


    </div>
    
    </>
  )
}

export default Register_page