import React from 'react';
import CardBanner from "./CardBanner"
import CardContent from "./CardContent"
import './Card.css';




const CardContainer = () => {
    return (
        <a href="https://reactjs.org" className="cardContainer">
            <div className="container">

                {/* card React image */}
                <CardBanner />
                {/* content below image */}
                <CardContent />

            </div>
        </a>

    );
};

export default CardContainer;