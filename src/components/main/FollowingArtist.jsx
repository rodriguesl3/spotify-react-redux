import React from 'react'
import PropTypes from 'prop-types'
import './FollowingArtist.scss';
import { RatingStart } from '../atoms/RatingStar';

import { GoThumbsup } from "react-icons/go";
import { FaSpotify } from 'react-icons/fa';

export const FollowingArtists = (props) => {
    const { followingArtist } = props;

    return (
        <div>
            <h3 className="title">That is your idol list...</h3>
            {!followingArtist && <div>Loading</div>}
            <div className="row">
                {followingArtist && followingArtist.artists.items.map((item, index) => {
                    return <div className="col-10 col-sm-4 col-lg-3 card-react" key={index}>
                        <div className="row">
                            <div className="col-6">
                                <img src={item.images[2].url} className="card-img-top" alt={item.name} />
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="card-title">{item.name}</h5>
                                        Popularity:
                                        </div>
                                    <div className="col-12">
                                        <RatingStart ratingValue={item.popularity} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card-text row">
                                        <p className="col-1"><GoThumbsup /> </p>
                                        <p className="col-8">{item.followers.total}</p>
                                    </div>
                                    <button className="btn btn-success">More in <FaSpotify /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    // </div>
                })}
            </div>
        </div>
    )
}

FollowingArtists.propTypes = {
    //userName: React.PropTypes.string,
    followingArtist: PropTypes.object,
}