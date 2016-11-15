/* /scripts/components/meganav/component.js */
const MeganavComponent = {
    /*scopes*/
    bindings: {
        data: '<'
    },
    bindToController: true,
    controller: class MeganavController {
        constructor($http, StateHelper) {
            var vm = this;
            this.StateHelper = StateHelper;
            vm.navigation = [
            {link: 'admin', title: 'Page'},
            {link: 'admin', title: 'Page'},
            {link: 'admin', title: 'Page'},
            {link: 'admin', title: 'Page'},
            {link: 'admin', title: 'Page'}
            ];
        }
    },
    templateUrl: '/templates/components/meganav.html'
}


MeganavComponent.$inject = ['$http', 'StateHelper'];

export default MeganavComponent;
