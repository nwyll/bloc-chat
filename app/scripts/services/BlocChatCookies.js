(function() {
  /**
  * @function BlocChatCookies
  * @desc Cookie service to store/get username.
  * @param $cookies, $uibModal
  */
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/usernameModal.html',
        controller: 'ModalInstanceCtrl as modalInstance'
      })
    }
  }

  angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
