import {SEARCH_DAYS} from '../../shared/Constants';

const INITIAL_STATE = {
  date: new Date(),
  times: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RESET_AVAILABLE_TIMES':
      return {...INITIAL_STATE, date: new Date()};

    case 'GET_AVAILABLE_TIMES':
      return {...state, loading: true};

    case 'GET_AVAILABLE_TIMES_SUCCESS':
      return {
        ...state,
        loading: false,
        times: [...state.times, ...action.payload],
        date: new Date(state.date.setDate(state.date.getDate() + SEARCH_DAYS)),
      };

    case 'GET_AVAILABLE_TIMES_FAILUED':
      return {...state, loading: false};

    default:
      return state;
  }
};
