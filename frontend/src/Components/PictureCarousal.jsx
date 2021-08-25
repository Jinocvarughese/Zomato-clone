import React from 'react';
import {IoMdArrowDropright} from "react-icons/io"

const PictureCarousalCard = () => {
    return (
        <>
        <div className="w-full h-64 relative px-4 overflow-hidden">
            <div className="w-full h-full relative">
                {" "}
            <img 
            src="https://b.zmtcdn.com/data/reviews_photos/e80/23503f45963114ecec083b81737e9e80_1626262345.jpg?output-format=webpfit=around|771.75:416.25crop=771.75:416.25;*,*" 
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg" 
            />
            <div className="absolute w-full h-full rounded-lg inset-0"
                style={{
                    background: 
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                    }}
                    />
                    </div>
                    <div className="absolute w-full left-8 bottom-2 text-white">
                <h4 className="z-10">
                    New Places
                </h4>
                <h6 className="z-10 flex items-center">
                    25 Places < IoMdArrowDropright />
                </h6>
            </div>
            </div>    
        </>
    )
};

export default PictureCarousalCard;
