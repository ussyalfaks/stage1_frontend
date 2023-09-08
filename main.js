Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = "0" + r);
    return r;
  };
  
  function updateClock() {
    var now = new Date();
    var milli = now.getMilliseconds(),
      sec = now.getSeconds(),
      min = now.getMinutes(),
      hou = now.getHours();
  
    var tags = ["h", "m", "s", "mi"],
      corr = [hou.pad(2), min.pad(2), sec.pad(2), milli];
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  
    // Get the current day of the week
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDayOfWeek = daysOfWeek[now.getDay()];
  
    // Display the current day of the week
    document.getElementById("currentDayOfTheWeek").textContent = ' Day of the Week: ' + currentDayOfWeek;
  }
  
  function initClock() {
    updateClock();
    setInterval(updateClock, 1);
  }
  
  // Initial update
  initClock();
  