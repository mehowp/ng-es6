// app.js
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponents from './app.components';
import Common from './app.commons';
import appConfig from './config';
import Templates from './templateCache';

const root = angular
  .module('app', [
        uiRouter,
        Templates.name,
        Common.name,
        AppComponents.name,

  ])
  .config(appConfig);

export
default angular.element(document.querySelector('html')).ready(function() {
    angular.bootstrap(document, [root.name], {
        strictDi: true
    });
})