(function() {
    /**
    * @function RoomModalInstanceCtrl
    * @desc Controls actions to create a new room once modal is open.
    * @param $uibModalInstance, Room service
    */
    function RoomModalInstanceCtrl($uibModalInstance, Room) {
      /**
      * @function cancel
      * @desc Closes the modal.
      */
      this.cancel = function() {
        $uibModalInstance.dismiss('dismiss');
      }

      /**
      * @function CreateRoom
      * @desc Creates a new room and adds to the room list.
      */
      this.createRoom = function() {
        $uibModalInstance.close(this.room);
        Room.add(this.room);
      }
    }

    angular
        .module('blocChat')
        .controller('RoomModalInstanceCtrl', ['$uibModalInstance', 'Room', RoomModalInstanceCtrl]);
})();
