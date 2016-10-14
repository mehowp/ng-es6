const routes = ($stateProvider, $locationProvider, $urlRouterProvider) => {
    '@ngInject';
    //$locationProvider.html5Mode(true);

    $urlRouterProvider.when("/admin/", "admin");

    $stateProvider
    //home
        .state('parent', {
            abstract: true,
            views: {
                "": {template: "<div ui-view />"},
                "footer": {templateUrl: "templates/footer.html"},
                "header": {templateUrl: "templates/header.html"}
            }
        })
        .state('parent.main', {
            url: '/',
            templateUrl: 'templates/home.html'
        })

        .state('parent.admin', {
            url: '/admin',
            templateUrl: 'templates/admin/dashboard.html'
        })
    $urlRouterProvider.otherwise('/');
}

routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export default routes;