import {call, put} from 'redux-saga/effects';
import Moment from 'moment';

import api from '../../shared/Api';

import {
  getAvailableTimesSuccess,
  getAvailableTimesFailed,
} from './TimePickerActions';

const fetchAvailableTimes = async item => {
  const params = {
    id_salao: item.store.id,
    id_serv: item.service.id,
    id_prof: item.professional.id,
    qtd_dias: 4,
    data: Moment(new Date()).format('YYYY-MM-DD'),
  };
  const response = await api.get('/get_hrs_disp', {params});
  return response.data.semana;
};

export function* getAvailableTimesAsync(action) {
  try {
    const times = yield call(fetchAvailableTimes, action.payload);
    yield put(getAvailableTimesSuccess(formatTimes(times)));
  } catch (e) {
    console.log(e);
    yield put(getAvailableTimesFailed());
  }
}

const formatTimes = days => {
  return days.map(day => ({
    weekDay: Moment(day.data)
      .format('dddd')
      .split('-')[0],
    shortDate: Moment(day.data).format('D/M/YY'),
    hrs: day.hrs.filter(hr => hr[0] === 's'),
  }));
};
