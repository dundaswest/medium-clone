import { connect } from 'react-redux'
import Sidebar from '../../components/Sidebar'
import { clap_article } from '../actions'

const mapStateToProps = state => ({ clap_num: state.articles });

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(clap_article()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
