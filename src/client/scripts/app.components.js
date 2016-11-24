import angular from 'angular';
import mainView from './components/main.component';
import basket from './components/basket/index';

const components = angular
  .module('app.components', [mainView.name, basket.name]);

export default components;