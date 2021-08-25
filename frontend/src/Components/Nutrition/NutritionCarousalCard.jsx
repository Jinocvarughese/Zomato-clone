import React from 'react';

const NutritionCarousalCard = (props) => {
    return (
        <div className="w-full h-72">
            <img 
             src={props.image}
              alt="nutrition"
              className="w-full h-full" />
        </div>
    )
};

export default NutritionCarousalCard;
