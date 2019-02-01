import React from 'react';
import './CustomCard.scss';

export const CustomCard = (props) => {
  const { image, content } = props;

  return (
    <div className="col-10 col-sm-4 col-lg-3 custom-card">
      <div className="row">
        <div className="col-5">
          <img src={image} className="card-img-top" alt="card-name" />
        </div>
        <div className="col-7">
          {content}
        </div>
      </div>
    </div>
  )
};

