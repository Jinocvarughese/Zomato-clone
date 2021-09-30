import React from 'react';
import {TiStarFullOutline} from "react-icons/ti";
import {RiDirectionLine, RiShareForwardLine} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";
//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
import InfoButtons from '../Components/restaurant/InfoButtons';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import TabContainer from '../Components/restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';



const RestaurantLayout = (props) => {
    return (
    <>
    {" "}
     <RestaurantNavbar />
        <div className="container mx-auto px-4 lg:px-20 ">  
          <ImageGrid 
              images={["https://b.zmtcdn.com/data/pictures/6/18853706/9b437dc670e7284a99e1ab9cfc8b2703.jpg?output-format=webp",
              "https://b.zmtcdn.com/data/pictures/chains/6/18853706/f6b98540ce7479066d5a1bcea73927a7.jpg?output-format=webp",
              "https://b.zmtcdn.com/data/pictures/chains/6/18853706/f6b98540ce7479066d5a1bcea73927a7.jpg?output-format=webp",
              "https://b.zmtcdn.com/data/pictures/chains/6/18853706/f6b98540ce7479066d5a1bcea73927a7.jpg?output-format=webp",
              "https://b.zmtcdn.com/data/pictures/chains/6/18853706/f6b98540ce7479066d5a1bcea73927a7.jpg?output-format=webp"]}/>
      
      <RestaurantInfo 
      name="Brahma Brews" 
      restaurantRating="3.5" 
      deliveryRating="3.2" 
      cuisine="Bar Food, Asian, Italian, North Indian, Fast Food, European, South Indian" 
      address="JP Nagar, Bangalore"/>
      
      <div className="my-4 flex flex-wrap gap-3">
      <InfoButtons isActive>
      <TiStarFullOutline /> Add Review 
        </InfoButtons>
        <InfoButtons>
      <RiDirectionLine /> Direction
        </InfoButtons>
        <InfoButtons>
      <BiBookmarkPlus /> Bokkmark
        </InfoButtons>
        <InfoButtons>
      <RiShareForwardLine /> Share
        </InfoButtons>

      </div>
      <div className="my-10">
      <TabContainer></TabContainer> 
      </div>
      <div className="relative">
      {props.children}
      </div>
    </div>
    <CartContainer />
    </>    
    );
};

export default RestaurantLayout;
