function setclock() {
  var dateInfo = new Date();
  var hour = modifyNumber(dateInfo.getHours());
  var min = modifyNumber(dateInfo.getMinutes());
  var sec = modifyNumber(dateInfo.getSeconds());
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;

  var year = dateInfo.getFullYear();
  var month = dateInfo.getMonth() + 1;
  var date = dateInfo.getDate();
  document.getElementById("date").innerHTML =
    year + "년 " + month + "월 " + date + "일";
}
function modifyNumber(time) {
  if (parseInt(time) < 10) {
    return "0" + time;
  } else return time;
}
setclock();
setInterval(setclock, 1000);
