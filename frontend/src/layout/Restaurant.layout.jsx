import React from 'react';


//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';


const RestaurantLayout = () => {
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
       </div>
    </>    
    );
};

export default RestaurantLayout;
