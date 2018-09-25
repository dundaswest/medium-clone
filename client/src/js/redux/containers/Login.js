import { connect } from 'react-redux';
import Login from '../../components/Login';
import { login } from '../actions';

const mapStateToProps = state => ({ isLoggedIn: state.login });

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(login()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
