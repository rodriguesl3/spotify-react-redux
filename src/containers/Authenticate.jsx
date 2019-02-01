import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { submitCredentials, addCredentials } from '../redux-flow/actions/login-actions';

const mapStateToProps = state => ({
  username: state.authentication.username,
  password: state.authentication.password,
  spotifyAuth: state.authentication.spotifyAuth,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (credentials, history) => dispatch(submitCredentials(credentials, history)),
  onUpdateCredentials: (e) => {
    const { name, value } = e.target;
    dispatch(addCredentials({ name, value }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
