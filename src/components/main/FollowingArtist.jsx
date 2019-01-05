import React from 'react'
import PropTypes from 'prop-types'
import './FollowingArtist.scss';


export const FollowingArtists = (props) => {
    const { followingArtist } = props;

    return (
        <div>
            Welcome
            spotify User Information
            {!followingArtist && <div>Loading</div>}
            <div className="row">
                {followingArtist && followingArtist.artists.items.map((item, index) => {

                    return <div className="col-sm-2" key={index}>
                        <div className="card">
                            <img src={item.images[2].url} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <p className="card-text">{item.name}</p>
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