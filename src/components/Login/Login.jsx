import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';


const Login = (props) => {
  const { history } = props;

  const handleSubmit = () => {
    props.onSubmit(props, history);
  };

  return (
    <div>
      <div className="content">
        <img src="https://wallpapercave.com/wp/EYS4oYf.jpg" className="imgUp" alt="" />
      </div>
      <div id="container">
        <img src="https://wallpapercave.com/wp/wp2130009.jpg" className="imgDown" alt="" />
        <div onClick={handleSubmit} className="pulse" />
        <div className="dot" />
      </div>
    </div>
  );
};

Login.propTypes = {

};

export default withRouter(Login);
