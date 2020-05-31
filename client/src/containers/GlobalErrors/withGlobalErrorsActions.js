import {connect} from 'react-redux';
import { setGlobalErrors } from 'store/globalErrors/globalErrors.actions';
import t from 'store/types';

export const mapDispatchToProps = (dispatch) => ({
  globalErrorsSet: (errors) => dispatch(setGlobalErrors(errors)),
});

export default connect(null, mapDispatchToProps);