import { connect } from 'react-redux';
import SignUp from '../../components/SignUp';
import { signUp } from '../actions';

const mapStateToProps = state => ({ singUpInfo: state.signUp });

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(signUp()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
