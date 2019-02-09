import React from 'react';
import './RatingStar.scss';

export const RatingStart = (props) => {
  const { ratingValue } = props;
  return (
    <div>
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: ratingValue + "%" }} />
      </div>
    </div>
  );
};
