import React from 'react';
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";
import { MdLaptopChromebook } from 'react-icons/md';

//component
import FloatMenubtn from '../../Components/restaurant/Order-Online/FloatMenubtn';
import Fooditem from '../../Components/restaurant/Order-Online/Fooditem';
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer';


const OrderOnline = () => {
    return (
        <>
          <div className="w-full flex ">
            <aside className="hidden md:flex flex-col gap-3 overflow-y-scroll border-r border-gray-200 h-screen  w-1/4">
              <MenuListContainer />
              <MenuListContainer />  
            </aside>
            <div className="w-full md:w-3/4">
              <h2 className="text-xl font-semibold">Order Online</h2>
              <h4 className="flex items-center gap-2 font-light text-gray-500">
                <AiOutlineCompass /> Live Track Your Order | <BiTimeFive/> 45 min
              </h4>

              <section>
                <Fooditem image="https://b.zmtcdn.com/data/dish_photos/18d/8d50ef0f0707cfcef27aabcf9773518d.jpg?fit=around|130:130&crop=130:130;*,*"
                price="1000"
                rating="3"
                title="Charcoal Mushrom Tikka"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque necessitatibus placeat explicabo doloribus, dolor minus odio esse officia similique dignissimos incidunt dolores praesentium mollitia quasi non aspernatur qui nisi?"
                 />
              </section>
            </div>
          </div> 
          <FloatMenubtn />
        </>
    )
}

export default OrderOnline;
