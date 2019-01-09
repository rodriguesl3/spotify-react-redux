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
            Welcome
            spotify User Information
            {!followingArtist && <div>Loading</div>}
            <div className="row">
                {followingArtist && followingArtist.artists.items.map((item, index) => {
                    return <div className="col-6 col-sm-4 col-lg-3" key={index}>
                        <div className="card">
                            <img src={item.images[2].url} className="card-img-top" alt={item.name} />
                            <h5 className="card-title">{item.name}</h5>
                            <div className="card-body">
                                <div className="complement">
                                    <div className="card-text row">
                                        <div className="col-8">
                                            Popularity:
                                        </div>
                                        <div className="col-8">
                                            <RatingStart ratingValue={item.popularity} />
                                        </div>

                                    </div>
                                    <div className="card-text row">
                                        <p className="col-1"><GoThumbsup /> </p>
                                        <p className="col-9">{item.followers.total}</p>
                                    </div>
                                    <button className="btn btn-success">More in <FaSpotify /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

FollowingArtists.propTypes = {
    //userName: React.PropTypes.string,
    followingArtist: PropTypes.object,
}