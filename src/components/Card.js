import React from "react";
import Note_1 from './note_1.png';
import Note_2 from './note_2.png';


const Card = () => {
    return(
       <div className="container bg-yellow md:flex rounded grid mx-auto mt-40 h-30">
         <div className=" order-2 md:order-1 w-full md:w-1/2 bg-red-400 p-5">
             <span className="mt-40">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatibus commodi quos a
              impedit provident odio adipisci, blanditiis tempore consectetur accusantium. Eligendi in, 
              voluptatem molestias at magnam ab. Quos quae nihil quo fugit omnis tenetur illum reprehenderit 
              vitae tempore, vel aliquam! Dolorum praesentium unde ducimus ullam beatae, veniam provident labore.

             </span>
         </div>

         <div className="order-1 md:order-2 w-full md:w-1/2 bg-red-400 p-6 grid grid-cols-2 md:flex relative">
           {/* hello */}
           <img src={Note_1} alt="note_1"  className="w-auto h-96 md:w-1/2 -mt-20"  />
           <img src={Note_2} alt="note_2 " className="w-auto h-96 md:w-1/2 ml-3 -mt-11"  />

         </div>
       </div>
    )
}

export default Card;