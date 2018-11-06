import { connect } from 'react-redux';
import Balances from '../components/Balances';
import goBack from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  goBack: previousComponent => {
    dispatch(goBack(previousComponent));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Balances);
