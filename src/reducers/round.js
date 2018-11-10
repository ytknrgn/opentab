const initialState = {
  roundId: '',
  userId: '',
  counterpartIds: [],
  totalAmount: '0',
};

function round(state = initialState, action) {
  switch (action.type) {
    case 'SET_ROUND_ID':
      return Object.assign({}, state, { roundId: action.roundId });
    case 'SET_ROUND_BUYER':
      return Object.assign({}, state, { userId: action.userId });
    case 'ADD_CHECKED_USER':
      return Object.assign({}, state, {
        counterpartIds: state.counterpartIds.concat(action.counterpart),
      });
    case 'REMOVE_CHECKED_USER':
      return Object.assign({}, state, {
        counterpartIds: state.counterpartIds.filter(
          counterpart => counterpart !== action.counterpart,
        ),
      });
    case 'RESET_ROUND':
      return Object.assign({}, initialState);
    case 'STORE_USERS_FINAL':
      // probably some socket code gets invoked instead
      return state;
    case 'SET_AMOUNT':
      return Object.assign({}, state, { totalAmount: action.totalAmount });
    default:
      return state;
  }
}
export default round;
