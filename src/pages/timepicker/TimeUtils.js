import Moment from 'moment';

export const getDateToApi = date => Moment(date).format('YYYY-MM-DD');

export const formatTimes = (days, timezone_offset) => {
  return days.map(day => ({
    weekDay: Moment(day.data)
      .format('dddd')
      .split('-')[0],
    shortDate: Moment(day.data).format('D/M/YY'),
    hrs: day.hrs
      .filter(hr => hr[0] === 's')
      .map(hr => {
        let dateTime = getDateTimeFromApi(day.data, hr);
        return {
          dateTime,
          formattedTime: Moment(dateTime).format('hh:mm'),
          apiTime: getApiDateTime(dateTime, timezone_offset)
        };
      }),
  }));
};

const getDateTimeFromApi = (date, time) => {
  let year = parseInt(date.split('-')[0]);
  let month = parseInt(date.split('-')[1]) - 1;
  let day = parseInt(date.split('-')[2]);
  let hour = parseInt(time.slice(1).split(':')[0]);
  let minute = parseInt(time.slice(1).split(':')[1]);
  return new Date(year, month, day, hour, minute);
};

const getApiDateTime = (time, timezone_offset) => {
  let result = new Date(time.getTime());
  result.setMinutes(result.getMinutes() - (result.getTimezoneOffset() + timezone_offset));
  return result;
}