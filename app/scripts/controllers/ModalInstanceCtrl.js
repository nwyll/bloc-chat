(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
      this.cancel = function() {
        $uibModalInstance.dismiss('dismiss');
      }

      this.createRoom = function() {
        $uibModalInstance.close(this.room);
        Room.add(this.room);
      }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
