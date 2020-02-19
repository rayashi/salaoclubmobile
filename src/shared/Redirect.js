export default ({user, checkoutItem}) => {
  if (!user) {
    return {route: 'Auth', param: null};
  }
  if (!checkoutItem) {
    return {route: 'Search', param: null};
  }
  if (!checkoutItem.service) {
    return {route: 'Professionals', param: {store: checkoutItem.store}};
  }
  if (!checkoutItem.professional) {
    return {route: 'Professionals', param: null};
  }
  if (!checkoutItem.time) {
    return {route: 'TimePicker', param: null};
  }
  return {route: 'Checkout', param: null};
};
