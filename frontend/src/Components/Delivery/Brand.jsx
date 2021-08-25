import React from 'react';
import Slider from "react-slick";

//components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow, PrevArrow } from '../CarousalArrow';


const Brand = () => {
    const logos = [
        "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/6b91ee8cd0e7fcca9423585e9fc67e65_1629442000.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/32d7efa7114468686994cd52a1ff0775_1625163901.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/78b776a93a1f8ed32dc0c876cf1ff743_1493958296.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/78b776a93a1f8ed32dc0c876cf1ff743_1493958296.png?output-format=webp", 
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    return (
        <>
   <Slider {...settings}> 
    {logos.map((logo) => (
                    <div className="w-24 h-24">
                    <img src={logo} 
                    alt="brand"
                    className="w-full h-full object-cover" />
                </div>
      ))}
   </Slider>
  </>
 )
}

export default Brand;
