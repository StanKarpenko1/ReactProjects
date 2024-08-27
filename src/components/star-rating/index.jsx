import {FaStar} from 'react-icons/fa'
import { useState } from 'react';
import './styles.css'; 

export default function StarRating ({starsQtty = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

      // Array of messages for each rating
      const messages = [
        "Please select a rating",  // Message for no rating
        "The Quality is Bad",      // Message for 1 star
        "The Quality is Poor",     // Message for 2 stars
        "The Quality is Average",  // Message for 3 stars
        "The Quality is Good",     // Message for 4 stars
        "The Quality is Excellent" // Message for 5 stars
    ];

    function handleClick (getCurrentIndex) {
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }
    function handleMouseLeave() {
        setHover(rating)
    }


    return (
        <div className="star-rating">
            {
                [...Array(starsQtty)].map((_, i) => {
                    i += 1
                    
                    return <FaStar
                        key={i}
                        className={i <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(i)}
                        onMouseMove={() => handleMouseEnter(i)}
                        onMouseLeave={() => handleMouseLeave(i)} 
                        size={40}
                    />

                })
                
            }
            <div className="message">
                {messages[rating]}
            </div>
        </div>
        
    )
}