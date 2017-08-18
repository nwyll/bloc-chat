(function() {
  /**
  * @function HomeCtrl
  * @desc Sets room list and displays current room messages.
  * @param Room service, Message service, $cookies
  */
  function HomeCtrl(Room, Message, $cookies) {

    var currentUser = $cookies.get('blocChatCurrentUser');

    this.rooms = Room.all;

    /**
    * @function openRoom
    * @desc Sets current room value and filters messages for current room.
    * @param { room } Room object holds $value(name) & $id
    */
    this.openRoom = function(room) {
      this.currentRoom = room;
      this.currentRoomName = this.currentRoom.$value
      this.roomMessages = Message.getByRoomId(this.currentRoom.$id);
    };

    /**
    * @function send
    * @desc Sends current message to firebase
    */
    this.send = function() {
      Message.addMessage({
        roomId: this.currentRoom.$id,
        content: this.newMessage,
        username: currentUser,
      });
    };
  }

  angular
      .module('blocChat')
      .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
