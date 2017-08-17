(function() {
    /**
    * @function RoomModalCtrl
    * @desc Opens the modal to create a new room.
    * @param $uibModal
    */
    function RoomModalCtrl($uibModal) {
      /**
      * @function open
      * @desc Opens the modal and creates a modal instance.
      */
      this.open = function() {
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/roomModal.html',
          controller: 'RoomModalInstanceCtrl as roomModalInstance'
        })
      }
    }

    angular
        .module('blocChat')
        .controller('RoomModalCtrl', ['$uibModal', RoomModalCtrl]);
})();
