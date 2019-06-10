import React from 'react';
import CardBanner from "./CardBanner"
import CardContent from "./CardContent"
import './Card.css';




const CardContainer = () => {
    return (
        <div className="container">
            {/* <a href="https://reactjs.org" className="cardContainer"></a> */}
                {/* card React image */}
                <CardBanner />
                {/* content below image */}
                <CardContent />
             
        </div>

       
    );
};

export default CardContainer;