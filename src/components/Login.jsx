import React from 'react'
import PropTypes from 'prop-types'
import './Login.scss'


 const Login = (props) => {
    
    return (
        <div className="login-content">
            <div className="form-group">
                <label for="username">Email address</label>
                <input type="username" className="form-control" name="username" aria-describedby="emailHelp"
                    placeholder="Enter email" value={props.username} onChange={props.onUpdateCredentials} />
            </div>
            <div className="form-group">
                <label for="txtPassword">Password</label>
                <input type="password" className="form-control" name="password"
                    placeholder="Password" value={props.password} onChange={props.onUpdateCredentials} />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="chkRememberCredentials" />
                <label className="form-check-label" for="chkRememberCredentials">Check me out</label>
            </div>
            <button type="button" onClick={props.onSubmit} className="btn btn-primary">Submit</button>

            {props.spotifyAuth}

        </div >

    );
}

Login.propTypes = {

}

export default Login;