import React from 'react';
import Slider from 'react-slick';
import { NextArrow,PrevArrow } from '../CarousalArrow';

//components
import PictureCarousalCard from '../PictureCarousal';

const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


const DiningCarousal = () => {
    return (
        <div className="w-full">
            <Slider {...settings}>
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            </Slider>
        </div>
    )
}

export default DiningCarousal

