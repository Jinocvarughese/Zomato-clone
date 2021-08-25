import React, {useState} from 'react';


//components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';



const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "12345",
            photos: ["https://b.zmtcdn.com/data/reviews_photos/4de/55801380eff775e2724b71ba783d14de_1552753721.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name:"Glen's Bakehouse",
            cuisine:["Bakery","Cafe","Pizza"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery:50,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "1234567",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/8/19050628/534cad35e483b07fdeab41ed55a91283.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name:"Momomia",
            cuisine:["Momos","Rolls"],
            averageCost: 400,
            isPro: false,
            isOff: 80,
            durationOfdelivery:49,
            restaurantReviewValue: 3.9,
        },
        {
            _id: "1234567",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/8/19050628/534cad35e483b07fdeab41ed55a91283.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name:"Momomia",
            cuisine:["Momos","Rolls"],
            averageCost: 400,
            isPro: false,
            isOff: 80,
            durationOfdelivery:49,
            restaurantReviewValue: 3.9,
        },
    ]);
    return (
        <>
            <DeliveryCarousal />
            {/* <Brand /> */ }
           <div className="flex justify-between flex-wrap">
           {
               restaurantList.map ((restaurant) => (
                   <RestaurantCard {...restaurant} key={restaurant._id} />
               ))
           }
           </div>

        </>
    );
};

export default Delivery;


