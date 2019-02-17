import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { clapArticle } from '../actions';

const mapStateToProps = state => ({ clapNum: state.articles });

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(clapArticle()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
