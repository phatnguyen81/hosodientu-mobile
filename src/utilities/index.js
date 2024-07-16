/*
Description: Format
Params:
data (string/object): datetime value
displayLocalTime (boolean): show local time or not
*/
import moment from 'moment';
export const formatDateTimeRequest = (strDateTime, char = '/') => {
  if (strDateTime && !strDateTime.includes('00:00')) {
    const arrDate = strDateTime.split(char);
    return `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}T00:00:00.000Z`;
  }
  return strDateTime;
};

export const formatDDMMYYYYHHmm = strDateTime => {
  const strList = strDateTime.split('T');
  const date = strList[0].split('-');
  const time = strList[1].slice(0, strList[1].length - 3);
  const formatDate = `${date[2]}/${date[1]}/${date[0]}`;
  return formatDate + ' | ' + time;
};

export const getYear = (strDateTime, char = '/') =>
  strDateTime.includes('00:00')
    ? strDateTime.split('-')[0]
    : strDateTime.split(char)[2];

export function timeDifference(givenTime) {
  givenTime = new Date(givenTime);
  const milliseconds = new Date().getTime() - givenTime.getTime();
  const numberEnding = number => {
    return number > 1 ? 's' : '';
  };
  const number = num => (num > 9 ? '' + num : '0' + num);
  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);
    if (years) {
      const month = number(givenTime.getUTCMonth() + 1);
      const day = number(givenTime.getUTCDate());
      const year = givenTime.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }
    const days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
      if (days < 28) {
        return days + ' day' + numberEnding(days);
      } else {
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        const month = months[givenTime.getUTCMonth()];
        const day = number(givenTime.getUTCDate());
        return `${day} ${month}`;
      }
    }
    const hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
      return `${hours} hour${numberEnding(hours)} ago`;
    }
    const minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
      return `${minutes} minute${numberEnding(minutes)} ago`;
    }
    return 'a few seconds ago';
  };
  return getTime();
}

export function timeDifferenceVN(givenTime) {
  let givenTimeNew = new Date(moment(givenTime));

  const milliseconds = new Date().getTime() - givenTimeNew.getTime();
  const number = num => (num > 9 ? '' + num : '0' + num);
  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);
    if (years) {
      const month = number(givenTimeNew.getUTCMonth() + 1);
      const day = number(givenTimeNew.getUTCDate());
      const year = givenTimeNew.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }
    const days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
      if (days < 28) {
        return days + ' ngày trước';
      } else {
        const month = givenTimeNew.getUTCMonth();
        const day = number(givenTimeNew.getUTCDate());
        return `${day}-${month}`;
      }
    }
    const hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
      return `${hours} giờ trước`;
    }
    const minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
      return `${minutes} phút trước`;
    }
    return 'vài giây trước';
  };
  return getTime();
}
