import React, { useState } from "react";
import Card from "./Card";

import {FiChevronLeft,FiChevronRight} from "react-icons/fi";

const Testimonial = (props) => {
 let reviews = props.reviews;
 const [index,setIndex] = useState(0);

 function leftShiftHandler(){
    //simple circular loop perform
           if(index - 1<0){
            setIndex(reviews.length-1);
           }
           else{
            setIndex(index-1);
           }
 }

 function rightShiftHandler(){
    //simple circular loop perform
    if(index+1 >= reviews.length ){
        setIndex(0);
    }
    else{
        setIndex(index+1);
    }

 }

 function surpriseHandler(){
     let randomIndex =    Math.floor(Math.random()*reviews.length);
     setIndex(randomIndex);
 }



    return(
        <div className="w-[85vw] md:w-[650px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
         {/* {
           reviews.map( (reviews) => (<Card reviews = {reviews}></Card>))
         } */}

              <Card reviews={reviews[index]}></Card>

               <div className="flex justify-center items-center text-3xl mt-5 gap-3 text-violet-400 font-bold">
                <button onClick={leftShiftHandler}
                 className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft/>    
                </button>
                <button  onClick={rightShiftHandler}
                 className="cursor-pointer hover:text-violet-500">
                   <FiChevronRight/>
                </button>
               </div>
               <div>
                <button onClick={surpriseHandler} 
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-4">
                Surprise Me
                </button>
               </div>
        </div>
    )
}
export default Testimonial;