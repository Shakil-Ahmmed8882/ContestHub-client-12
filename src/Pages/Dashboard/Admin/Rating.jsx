import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0); // State to store the selected rating

  const handleRatingChange = (value) => {
    setRating(value); // Update the rating state when a star is clicked
    // You can perform further actions here based on the selected rating
    console.log('Selected Rating:', value);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-green-500"
          checked={value === rating} // Check the input if it matches the current rating state
          onChange={() => handleRatingChange(value)} // Handle click event
        />
      ))}
    </div>
  );
};

export default Rating;
