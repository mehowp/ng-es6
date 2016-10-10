import angular from 'angular';
import mainView from './components/main.component';

const components = angular
  .module('app.components', [mainView.name]);

export default components;