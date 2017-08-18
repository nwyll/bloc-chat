(function() {
  /**
  * @function HomeCtrl
  * @desc Sets room list and displays current room messages.
  * @param Room service, Message service
  */
  function HomeCtrl(Room, Message) {

    this.rooms = Room.all;

    /**
    * @function openRoom
    * @desc Sets current room value and filters messages for current room.
    * @param { room } Room object holds $value(name) & $id
    */
    this.openRoom = function(room) {
      var currentRoom = room;

      this.currentRoomName = currentRoom.$value
      this.roomMessages = Message.getByRoomId(currentRoom.$id);
    }
  }

  angular
      .module('blocChat')
      .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
