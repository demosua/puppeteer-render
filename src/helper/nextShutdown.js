function checkNearestShutdown(data) {
  const todayGraph = data[0];
  const tomorrowGraph = data.length > 1 ? data[1] : [];

  const currentTime = new Date();
  const currentMinutes = parseInt(currentTime.getHours() * 60 + currentTime.getMinutes());
  
  const timeArray = [];
  todayGraph.forEach(entry => {
    const timeMatch = entry.match(/^(\d{2}:\d{2})/);
    if (timeMatch) {
      const [hours, minutes] = timeMatch[1].split(':').map(Number);
      const entryTimeMinutes = hours * 60 + minutes;
      timeArray.push([entryTimeMinutes, timeMatch[1]]);
    }
  });

  const futureTimes = timeArray.filter(([time, _]) => time > currentMinutes);

  if (futureTimes.length > 0) {
    const nearestTime = futureTimes.reduce((prev, curr) => (prev[0] < curr[0] ? prev : curr));
    return {text: `Найближчий час відключення: ${nearestTime[1]}`, minutes: nearestTime[0] - currentMinutes}
  } else {
    if(tomorrowGraph.length > 0){
      const timeMatch = tomorrowGraph[0].match(/^(\d{2}:\d{2})/);
      return {text: `Наступне відключення завтра о ${timeMatch[1]}.`, minutes: 100}
    }else{
      return {text:'На сьогодні відключень не планується.', minutes: 100};
    }
  }
}

module.exports = {checkNearestShutdown};