export const getAvailableTimes = item => ({
  type: 'GET_AVAILABLE_TIMES',
  payload: item,
});

export const getAvailableTimesSuccess = times => ({
  type: 'GET_AVAILABLE_TIMES_SUCCESS',
  payload: times,
});

export const getAvailableTimesFailed = () => ({
  type: 'GET_AVAILABLE_TIMES_FAILED',
});

export const resetAvailableTimes = times => ({
  type: 'RESET_AVAILABLE_TIMES',
  payload: times
});
