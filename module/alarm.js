const handleAlarm = () => {
  console.log("나는 알람");

  document.getElementById("back-button").style.visibility = "visible";
  document.getElementById("new-button").style.visibility = "visible";
};

module.exports = {
  handleAlarm,
};
