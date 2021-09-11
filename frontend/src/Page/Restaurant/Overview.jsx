import React from 'react';
import { Link, useParams } from  "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io"
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

//components
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/restaurant/MenuSimilarRestaurantCard';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';
import MapView from '../../Components/restaurant/MapView';


const Overview = () => {
    const { id } = useParams();

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

      const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <>
        <div className="flex flex-col md:flex-row relative">
              <div className="w-full md:w-8/12">
                  <h2 className="font-semibold text-lg md:text-xl my-4">About this place</h2>
              <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">
                      Menu
                  </h4>
                  <Link to={`/restaurant/${id}/menu`}>
                  <span className="flex items-center gap-1 text-zomato-400">
                      See all menu <IoMdArrowDropright />
                  </span>
                  </Link>
                  </div>
                  <div className="flex flex-wrap gap-3">
                  <MenuCollection 
                  menuTitle="Menu" 
                   pages="3"
                   image={["https://b.zmtcdn.com/data/menus/057/18551057/00345df375950eb5612b464124aed584.jpg?fit=around%7C200%3A200",]}
                 /> </div>

                  <h4 className="text-lg font-medium my-4">
                      Cuisines
                  </h4>
                  <div className="flex flex-wrap gap-2">
                      <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                          Street food
                      </span>
                      <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                          Street food
                      </span>
                      <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                          Street food
                      </span>
                  </div>


                  <div className="my-4">
                      <h4 className="text-lg font-medium">
                       Average Cost
                      </h4>
                      <h6>
                          ₹100 for on order (approx.)
                      </h6>
                      <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                  </div>
                  
                  <div className="my-4">
                  <h4 className="text-lg font-medium"> Similar Restaurants</h4>
                <Slider {...settings}>
                <MenuSimilarRestaurantCard 
                  image="https://b.zmtcdn.com/data/pictures/6/18871246/142b31a34d69a83db79fc0a7f9a90a56_featured_v2.jpg"
                  title="ShakesBierre"
                  />
                <MenuSimilarRestaurantCard 
                  image="https://b.zmtcdn.com/data/pictures/6/18871246/142b31a34d69a83db79fc0a7f9a90a56_featured_v2.jpg"
                  title="ShakesBierre"
                  />
                <MenuSimilarRestaurantCard 
                  image="https://b.zmtcdn.com/data/pictures/6/18871246/142b31a34d69a83db79fc0a7f9a90a56_featured_v2.jpg"
                  title="ShakesBierre"
                  />
                <MenuSimilarRestaurantCard 
                  image="https://b.zmtcdn.com/data/pictures/6/18871246/142b31a34d69a83db79fc0a7f9a90a56_featured_v2.jpg"
                  title="ShakesBierre"
                  />
                <MenuSimilarRestaurantCard 
                  image="https://b.zmtcdn.com/data/pictures/6/18871246/142b31a34d69a83db79fc0a7f9a90a56_featured_v2.jpg"
                  title="ShakesBierre"
                  />
                </Slider>
                  </div>
                
                  <div className="my-4">
                      <h4 className="text-lg font-medium">
                          Rate your delivery experience
                          </h4>
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                          />
                  </div>

                  <div className="my-4 w-full md:hidden flex flex-col gap-4">
                  <MapView 
               title="Brahma Brews" 
               phno="+917483191358" 
               mapLocation={[12.922265019201095, 77.62081506151557]} 
               address="Opposite Brigade Palm Springs, 24th Main, 7th Phase, JP Nagar, Bangalore"/>
                  </div>

                 <div className="my-4 flex flex-col gap-4">
                   <ReviewCard />
                   <ReviewCard />
                   <ReviewCard />
                 </div>
              </div>
               <aside 
                 style={{ height: "fit-content" }}
                 className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-md rounded-xl flex flex-col gap-4">
               <MapView 
               title="Brahma Brews" 
               phno="+917483191358" 
               mapLocation={[12.922265019201095, 77.62081506151557]} 
               address="Opposite Brigade Palm Springs, 24th Main, 7th Phase, JP Nagar, Bangalore"/>
               </aside>
        </div>  
        </>
    )
}

export default Overview;
