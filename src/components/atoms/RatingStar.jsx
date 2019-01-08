import React from 'react'

import './RatingStar.scss';

export const RatingStart = (props) => {
    const { ratingValue } = props;

    return (
        <div>
            <div class="stars-outer">
                <div class="stars-inner" style={{width: ratingValue+"%"}}></div>
            </div>
        </div>
    )
}