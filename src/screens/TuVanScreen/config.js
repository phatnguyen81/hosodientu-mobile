const fotmatDate = values => {
  const msDiff = new Date().getTime() - new Date(values).getTime(); //Future date - current date
  const temp = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  if (temp === 0) {
    const hours = Math.floor(msDiff / 36e5);
    return hours + 1 + ' giờ';
  }
  return temp + 1 + ' ngày';
};

export default fotmatDate;
