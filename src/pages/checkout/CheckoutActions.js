export const setCheckoutItem = item => ({
  type: 'SET_CHECKOUT_ITEM',
  payload: item,
});

export const book = item => ({type: 'BOOK', payload: item});

export const bookSuccess = () => ({type: 'BOOK_SUCCESS'});

export const bookFailed = () => ({type: 'BOOK_FAILED'});
