import React from "react";
import { Carousel } from "react-bootstrap";
import Inventories from "../Inventories/Inventories";

const Home = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 mt-5 height-100"
            src="https://i.ibb.co/94DNQ9v/gettyimages-854321536-612x612.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mt-5 height-100"
            src="https://i.ibb.co/xD299RX/istockphoto-696526278-170667a.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
   
      <Inventories></Inventories>
    </div>
  );
};

export default Home;
