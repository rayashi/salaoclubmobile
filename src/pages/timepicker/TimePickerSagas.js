import {call, put, select} from 'redux-saga/effects';
import Moment from 'moment';
import axios from 'axios';

import {SEARCH_DAYS} from '../../shared/Constants';

import {
  getAvailableTimesSuccess,
  getAvailableTimesFailed,
  resetAvailableTimes,
} from './TimePickerActions';

const fetchAvailableTimes = async item => {
  const params = {
    id_salao: item.store.id,
    id_serv: item.service.id,
    id_prof: item.professional.id,
    qtd_dias: SEARCH_DAYS,
    data: Moment(item.date).format('YYYY-MM-DD'),
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
    hrs: day.hrs.filter(hr => hr[0] === 's').map(hr => {
      let dateTime = getDateTimeFromApi(day.data, hr); 
      return {
        dateTime,
        formattedTime: Moment(dateTime).format('hh:mm')
      }
    }),
  }));
};

const getDateTimeFromApi = (date, time) => {
  let year = parseInt(date.split('-')[0]);
  let month = parseInt(date.split('-')[1]) - 1;
  let day = parseInt(date.split('-')[2]);
  let hour = parseInt(time.slice(1).split(':')[0]);
  let minute = parseInt(time.slice(1).split(':')[1]);
  return new Date(year, month, day, hour, minute)
}
