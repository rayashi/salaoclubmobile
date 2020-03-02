const INITIAL_STATE = {
  item: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CHECKOUT_ITEM':
      return {...state, item: action.payload};

    default:
      return state;
  }
};
