import React from "react";
import "./Home.css";
import Product from "./product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71NqG9bBp7L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="11111111"
            title="Certified Refurbished Echo (4th Gen) Charcoal | Smart home hub with eero Mesh Wifi Router | Turns Echo Dot into a wifi extender"
            price={22.69}
            image="https://m.media-amazon.com/images/I/716jbjmgJhL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            rating={4}
          />
          <Product
            id="11111112"
            title="Free People Square Eyes Bodysuit"
            price={11.69}
            image="https://m.media-amazon.com/images/I/71eNNozhTvL._AC_SY550_.jpg"
            rating={5}
          />
          <Product
            id="11111113"
            title="Apple iPhone 14 Plus (128 GB) - Midnight"
            price={1220.69}
            image="https://m.media-amazon.com/images/I/61B0+qQriPL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="11111114"
            title="FVero Forza Spectra Corner Light RGB LED Corner Lamp with App and Remote Control, Color Changing Ambience Light with Music Sync, Led Floor Lamp for Living Room Bedroom Gaming Room"
            price={29.69}
            image="https://m.media-amazon.com/images/I/61cSFEqMixL._SX522_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="11111115"
            title="Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA43CUE60AKLXL (Black)"
            price={300.69}
            image="https://m.media-amazon.com/images/I/81s35LoX36L._SX522_.jpg"
            rating={4}
          />
          <Product
            id="11111116"
            title="Godrej 180 L 2 Star Advanced Capillary Technology, With Jumbo Vegetable Tray Direct Cool Single Door Refrigerator(2023 Model, RD EDGE 205B WRF PP BL, Pep Blue)"
            price={250.69}
            image="https://m.media-amazon.com/images/I/61jQdWXtqSL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="11111117"
            title="ASUS ROG Strix G17 (2022), 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7-6800HS, RTX 3050 4GB Graphics, Gaming Laptop (16GB/512GB SSD/Windows 11/Gray/2.5 Kg),G713RC-HX109WS"
            price={1000.69}
            image="https://m.media-amazon.com/images/I/61GkvvDNnCL._SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="11111118"
            title='
            Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution'
            price={77.77+" (Thala for a reason)"} 
            image="https://m.media-amazon.com/images/I/61AHiYyu3ZL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="11111119"
            title="Hand cuff for Kids for police role play"
            price={69.69}
            image="https://m.media-amazon.com/images/I/51wQAo9HBeL._SX522_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
