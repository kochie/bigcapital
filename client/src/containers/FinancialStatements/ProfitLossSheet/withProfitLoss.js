import {connect} from 'react-redux';
import {
  getFinancialSheetIndexByQuery,
  getFinancialSheet,
  getFinancialSheetColumns,
  getFinancialSheetQuery,
  getFinancialSheetTableRows,
} from 'store/financialStatement/financialStatements.selectors';


export default (mapState) => {
  const mapStateToProps = (state, props) => {
    const { profitLossIndex } = props;

    const mapped = {
      profitLossSheet: getFinancialSheet(state.financialStatements.profitLoss.sheets, profitLossIndex),
      profitLossColumns: getFinancialSheetColumns(state.financialStatements.profitLoss.sheets, profitLossIndex),
      profitLossQuery: getFinancialSheetQuery(state.financialStatements.profitLoss.sheets, profitLossIndex),
      profitLossTableRows: getFinancialSheetTableRows(state.financialStatements.profitLoss.sheets, profitLossIndex),

      profitLossSheetLoading: state.financialStatements.profitLoss.loading,
      profitLossSheetFilter: state.financialStatements.profitLoss.filter,
    };
    return mapState ? mapState(mapped, state, props) : mapped;
  };
  return connect(mapStateToProps);
}