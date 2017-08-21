(function() {
    /**
    * @function Message
    * @desc Message factory to handle all message related API queries.
    * @param $firebaseArray
    * @returns { Message }
    */
    function Message($firebaseArray) {

      var Message = {};
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);

      /**
      * @function getByRoomId
      * @desc Filters all messages by room id.
      * @param { roomId }
      * @returns [roomMessages] Array of messages for room matching room id.
      */
      Message.getByRoomId = function(roomId) {
        var roomMessages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        return roomMessages;
      };

      Message.addMessage = function(message) {
        messages.$add(message);
      };

      return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
