(function() {
  /**
  * @function Room
  * @desc Creates a list of chat rooms.
  * @param $firebaseArray
  * @returns { Room } Array of the rooms in the database.
  */
  function Room($firebaseArray) {

    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    /**
    * @function Room.add
    * @desc Adds a room to the database.
    * @param { room }
    */
    Room.add = function(room) {
      rooms.$add(room)
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room])
})();
