(function() {
  /**
  * @function TimeFilter
  * @desc Service to format time.
  * @param
  * @returns
  */
  function TimeFilter() {
    /**
    * @function filterTime
    * @desc Filters the sentAt time to hh:mm am/pm.
    * @param { time } new Date object
    */
    return function(time) {

      var hours = time.getHours(),
          mins = time.getMinutes();

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
