import React from "react";
import "./Main_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import videoBg from "../Videos/Aqua_video.mp4";
import fishes from "../Images/fishes.jpeg";
import filters from "../Images/filters.jpeg";
import tanks from "../Images/tanks.jpeg";
import bowls from "../Images/bowls.jpeg";
import food from "../Images/food.jpeg";
import sand from "../Images/sand.jpg";
import stones from "../Images/stones.jpeg";
import remedies from "../Images/remedies.jpeg";
import lights from "../Images/lights.jpg";
import thermostat from "../Images/thermostat.jpg";
import toys_and_decors from "../Images/toys_and_decors.jpeg";
import gadgets from "../Images/gadgets.jpeg";
import aquascapping_tools from "../Images/aquascapping_tools.jpeg";
import accessories from "../Images/accessories.webp";
import plants from "../Images/plants.jpeg";
import gifts from "../Images/gifts.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMagnifyingGlass,
  faTruckFast,
  faCartShopping,
  faUser,
  faBars,
  faTriangleExclamation,
  faStar,
  faLocationDot,
  faPhone,
  faClock,
  faArrowTurnUp,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons/faBorderNone";
// import { faStar } from '@fortawesome/free-regular-svg-icons'
import review1 from "../Images/review1.png";
import review2 from "../Images/review2.png";
import review3 from "../Images/review3.png";
import review4 from "../Images/review4.png";
import review5 from "../Images/review5.png";
import review6 from "../Images/review6.png";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

const Main_page = () => {
  return (
    <>
      <div class="top1">
        <p id="top1_01">
          <FontAwesomeIcon icon={faTruck} /> FREE Shipping On All Orders Over
          ₹499
        </p>
      </div>

      <div class="top2">
        <div id="top2_01">
          <a href="#" id="top2_01_00">
            AQUA WORLD
          </a>
        </div>
        <div id="top2_02">
          <a>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          <a>
            <FontAwesomeIcon icon={faTruckFast} />
          </a>
          <a>
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
          <a id="top2_02_user" href="file:///D:/Webpage/register_page.html">
            <FontAwesomeIcon icon={faUser} />
          </a>

          <Dropdown style={faBorderNone}>
            <Dropdown.Toggle variant="">
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                textDecoration={faBorderNone}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#middle0">Our Products</Dropdown.Item>
              <Dropdown.Item href="#bottom3">Contacts Us</Dropdown.Item>
              <Dropdown.Item href="">About Us</Dropdown.Item>
              <Dropdown.Item href="#">Shipping Info</Dropdown.Item>
              <Dropdown.Item href="#">Privacy Policy</Dropdown.Item>
              <Dropdown.Item href="#">Terms of Service</Dropdown.Item>
              <Dropdown.Item href="#">Refund Policy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div id="top3">
        <p id="top3_01">" In the aquarium of life,</p>
      </div>
      <div id="top4">
        <p id="top4_01"> each fish has a story to tell..."</p>
      </div>

      <div class="top5">
        <div id="top3_00">Fish</div>
        <video id="top5_01" src={videoBg} autoPlay loop muted />
      </div>

      <div id="middle0">
        <div id="middle0_00">
          <FontAwesomeIcon icon={faTriangleExclamation} id="middle0_01" />
          Fishes Grand Sale On Every Week End !!!
        </div>
        <p id="middle0_01_01">Our Products</p>
      </div>

      <div class="middle1">
        <div id="middle1_01">
          <img src={fishes} width="300px" height="200px" />
          <p id="middle1_01_01">Fishes</p>
        </div>
        <div id="middle1_02">
          <img src={filters} width="300px" height="200px" />
          <p id="middle1_02_01">Filters</p>
        </div>
        <div id="middle1_03">
          <img src={tanks} width="300px" height="200px" />
          <p id="middle1_03_01">Tanks</p>
        </div>
        <div id="middle1_04">
          <img src={bowls} width="300px" height="200px" />
          <p id="middle1_04_01">Bowls</p>
        </div>
      </div>

      <div class="middle2">
        <div id="middle2_01">
          <img src={food} width="300px" height="200px" />
          <p id="middle2_01_01">Fish Food</p>
        </div>
        <div id="middle2_02">
          <img src={sand} width="300px" height="200px" />
          <p id="middle2_02_01">Aquarium Sand</p>
        </div>
        <div id="middle2_03">
          <img src={stones} width="300px" height="200px" />
          <p id="middle2_03_01">Aquarium Stones</p>
        </div>
        <div id="middle2_04">
          <img src={remedies} width="300px" height="200px" />
          <p id="middle2_04_01">Remedies</p>
        </div>
      </div>

      <div class="middle3">
        <div id="middle3_01">
          <img src={lights} width="300px" height="200px" />
          <p id="middle3_01_01">Lights</p>
        </div>
        <div id="middle3_02">
          <img src={thermostat} width="300px" height="200px" />
          <p id="middle3_02_01">Theromostat Heater</p>
        </div>
        <div id="middle3_03">
          <img src={toys_and_decors} width="300px" height="200px" />
          <p id="middle3_03_01">Toys & Decors</p>
        </div>
        <div id="middle3_04">
          <img src={gadgets} width="300px" height="200px" />
          <p id="middle3_04_01">Gadgets</p>
        </div>
      </div>

      <div class="middle4">
        <div id="middle4_01">
          <img src={aquascapping_tools} width="300px" height="200px" />
          <p id="middle4_01_01">Aquascaping Tools</p>
        </div>
        <div id="middle4_02">
          <img src={accessories} width="300px" height="200px" />
          <p id="middle4_02_01">Aquarium Accessories</p>
        </div>
        <div id="middle4_03">
          <img src={plants} width="300px" height="200px" />
          <p id="middle4_03_01">Aquarium Live Plants</p>
        </div>
        <div id="middle4_04">
          <img src={gifts} width="300px" height="200px" />
          <p id="middle4_04_01">Aquarium Gifts</p>
        </div>
      </div>

      <div class="review">
        <div id="review_00">
          <p id="review_00_01">Reviews From Customers</p>
          <p id="review_00_02">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <i class="fa-regular fa-star"></i>575 Reviews
          </p>
        </div>
        <Carousel id="carousel">
          <Carousel.Item>
            <img
              className="d-block w-20"
              src={review1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src={review2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20 h-10"
              src={review3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src={review4}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src={review5}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src={review6}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>

      </div>

      <div id="bottom1">
        <a id="bottom1_01" href="#">
          <FontAwesomeIcon icon={faArrowUp} /> Back to top{" "}
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>

      <div class="bottom2">
        <div id="bottom2_01">
          <p id="bottom2_01_01">Explore our store</p>
          <a href="#bottom3" >- Contact Us</a>
          <br></br>
          <a>- About Us</a>
          <br></br>
          <a>- Shipping Info</a>
          <br></br>
          <a>- Privacy Policy</a>
          <br></br>
          <a>- Terms of Service</a>
          <br></br>
          <a>- Refund Policy</a>
          <br></br>
        </div>

        <div id="bottom2_02">
          <p id="bottom2_02_01">Our customers are everything! </p>
          <p>That's why we're committed to providing:</p>
          <p>- The highest quality customer service</p>
          <p>- The largest online selection of fish</p>
          <p>- Rare & unique species</p>
          <p>- Healthy & happy aquatic pets</p>
          <p>- Safe & quick shipping procedures</p>
          <p>- Aquascaping & fish care tips and tricks</p>
        </div>
      </div>

      <div id="bottom3">
        <div id="bottom3_01">
          <p id="bottom3_01_01">
            <FontAwesomeIcon icon={faLocationDot} />
          </p>
          <p>AQUA WORLD</p>
          <p>15/11, Richie Street,</p>
          <p>Kamban Nagar,</p>
          <p>Porur, Chennai,</p>
          <p>TamilNadu - 600125</p>
        </div>

        <div id="bottom3_02">
          <p id="bottom3_02_01">
            <FontAwesomeIcon icon={faPhone} />
          </p>
          <p>+91-6111111111</p>
          <p>+91-6222222222</p>
          <p>info@aquaworld.com</p>
        </div>

        <div id="bottom3_03">
          <p id="bottom3_03_01">
            <FontAwesomeIcon icon={faClock} />
          </p>
          <p>Warehouse Hours</p>
          <p>Tue - Sun</p>
          <p>10:00am - 9:00pm</p>
        </div>
      </div>

      <div class="bottom4">
        <div id="bottom4_01">
          <a id="bottom4_01_01">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a id="bottom4_01_02">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a id="bottom4_01_03">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a id="bottom4_01_04">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div id="bottom4_02">
          <p>© 2025, Aqua World All rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Main_page;
