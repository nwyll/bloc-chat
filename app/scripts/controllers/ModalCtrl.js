(function() {
    /**
    * @function ModalCtrl
    * @desc Opens the modal to create a new room.
    * @param $uibModal
    */
    function ModalCtrl($uibModal) {
      /**
      * @function open
      * @desc Opens the modal and creates a modal instance.
      */
      this.open = function() {
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller: 'ModalInstanceCtrl as modalInstance'
        })
      }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();
