import React from 'react'
import PropTypes from 'prop-types'
import './Login.scss'
import { withRouter } from 'react-router-dom'


const Login = (props) => {
    const { history } = props;

    const handleSubmit = () => {
        props.onSubmit(props, history)
    }

    return (
        <div id="container" >
            <img className="imgBackground" src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <div onClick={handleSubmit} className="pulse"></div>
            <div className="dot"></div>
        </div>
    );
}

Login.propTypes = {

}

export default withRouter(Login);