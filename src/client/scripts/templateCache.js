import angular from 'angular'; export default angular.module('templateCache', []).run(['$templateCache', function($templateCache) {$templateCache.put('footer.html','<p>ok</p>');
$templateCache.put('header.html','<p>this is header</p>');
$templateCache.put('home.html','<p>this is home page, u can do what u want to do</p>');}]);