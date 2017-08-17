(function() {
    /**
    * @function UsernameModalInstanceCtrl
    * @desc Controls actions to add a username.
    * @param $uibModalInstance
    */
    function UsernameModalInstanceCtrl($uibModalInstance) {
      /**
      * @function setUsername
      * @desc Set the username.
      */
      this.setUsername = function() {
        $uibModalInstance.close(this.username);
        console.log(this.username)
      }

    }

    angular
        .module('blocChat')
        .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', UsernameModalInstanceCtrl]);
})();
