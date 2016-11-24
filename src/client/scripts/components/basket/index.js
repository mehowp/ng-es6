let Controller = () => {

}

Controller.$inject = [];


let BasketComponent = {
    templateUrl: '/components/basket/index.html',
    Controller
};

export default angular.module('BasketComponent', [])
    .component('basket', BasketComponent);
