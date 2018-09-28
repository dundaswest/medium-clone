import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../actions';

const mapStateToProps = state => ({ isLoggedIn: state.login });

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
