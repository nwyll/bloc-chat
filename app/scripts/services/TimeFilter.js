(function() {
  /**
  * @function TimeFilter
  * @desc Service to format time.
  * @returns anonymous function
  */
  function TimeFilter() {
    /**
    * @function anonymous
    * @desc Filters the sentAt time to hh:mm am/pm.
    * @returns formattedTime
    */
    return function() {
      var currentTime = new Date();

      var hours = currentTime.getHours(),
          mins = currentTime.getMinutes();

      var formattedTime;

      if (mins < 10) {
        var formattedMins = '0' + mins;
      } else {
        formattedMins = mins;
      }

      if (hours < 13) {
        var formattedHours = hours;
      } else {
        formattedHours = hours - 12;
      }

      if (hours < 12) {
        formattedTime = formattedHours + ":" + formattedMins + " am";
      } else {
        formattedTime = formattedHours + ":" + formattedMins + " pm";
      }

      return formattedTime;
    };
  }

  angular
    .module('blocChat')
    .factory('TimeFilter', TimeFilter)
})();
