import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';

import {SEARCH_DAYS} from '../../shared/Constants';

import {
  getAvailableTimesSuccess,
  getAvailableTimesFailed,
  resetAvailableTimes,
} from './TimePickerActions';
import {formatTimes, getDateToApi} from './TimeUtils';

const fetchAvailableTimes = async item => {
  const params = {
    id_salao: item.store.id,
    id_serv: item.service.id,
    id_prof: item.professional.id,
    qtd_dias: SEARCH_DAYS,
    data:  getDateToApi(item.date),
  };
  const response = await axios.get('/get_hrs_disp', {params});
  return response.data.semana;
};

export function* getAvailableTimesAsync(action) {
  try {
    if (action.payload.first) {
      yield put(resetAvailableTimes());
    }
    const {date} = yield select(state => state.TimePickerReducer);
    const times = yield call(fetchAvailableTimes, {
      ...action.payload.item,
      date,
    });
    yield put(getAvailableTimesSuccess(formatTimes(times, action.payload.item.store.timezone_offset)));
  } catch (e) {
    console.log(e);
    yield put(getAvailableTimesFailed());
  }
}