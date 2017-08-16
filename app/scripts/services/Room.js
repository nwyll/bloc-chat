(function() {
  //Room callback function with $firebaseArray injected as a dependency
  function Room($firebaseArray) {
    //create an empty Room object
    var Room = {};
    //creates a reference to our rooms database
    var ref = firebase.database().ref().child("rooms");
    //rooms uses the $firebaseArray service to make ref an array
    var rooms = $firebaseArray(ref);

    //append rooms to the Room object as Room.all
    Room.all = rooms;

    //creating a add method to insulate the firebase $add method
    Room.add = function(room) {
      rooms.$add(room)
    };

    //return the Room object that now contains an array of the rooms in the database
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room])
})();
