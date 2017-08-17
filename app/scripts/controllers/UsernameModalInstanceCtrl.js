(function() {
    /**
    * @function UsernameModalInstanceCtrl
    * @desc Controls actions to add a username.
    * @param $uibModalInstance, $cookies
    */
    function UsernameModalInstanceCtrl($uibModalInstance, $cookies) {
      /**
      * @function setUsername
      * @desc Set a username.
      */
      this.setUsername = function() {
        if (this.username) {
          $uibModalInstance.close(this.username);
          $cookies.put('blocChatCurrentUser', this.username);
        }
      }
    }

    angular
        .module('blocChat')
        .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', '$cookies', UsernameModalInstanceCtrl]);
})();
