const init = ($rootScope) => {
    
    $rootScope.$on('$stateChangeStart', function (toState) {
        if (toState.resolve) {
            $rootScope.loadingView = true;
        }
    });

    $rootScope.$on('$stateChangeSuccess', function (toState) {
        if (toState.resolve) {
            $rootScope.loadingView = false;
        }
    });

}

init.$inject = ['$rootScope'];
export default init;