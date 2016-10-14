// app.js
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngTranlaste from 'angular-translate';
import AppComponents from './components/app.components';
import Common from './commons/app.commons';
import Init from './init';
import Routes from './routes';
import Templates from './templateCache';


const root = angular
  .module('app', [
        uiRouter,
        ngAnimate,
        ngTranlaste,
        Templates.name,
        Common.name,
        AppComponents.name

  ])
  .run(Init)
  .config(Routes);


export
default angular.element(document.querySelector('body')).ready(function() {
    angular.bootstrap(document, [root.name], {});
})