let MainViewComponent = {
  template: `<ui-view />`
};

export default angular.module('MainView', [])
.component('main', MainViewComponent);