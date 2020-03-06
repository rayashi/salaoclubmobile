const INITIAL_STATE = {
  item: null,
  booking: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CHECKOUT_ITEM':
      return {...state, item: action.payload};

    case 'BOOK':
      return {...state, booking: true};

    case 'BOOK_SUCCESS':
      return {...state, booking: false};

    case 'BOOK_SUCCESS':
      return {...state, booking: false};

    default:
      return state;
  }
};
