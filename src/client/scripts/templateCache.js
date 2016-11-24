import angular from 'angular'; export default angular.module('templateCache', []).run(['$templateCache', function($templateCache) {$templateCache.put('footer.html','<p>ok</p>');
$templateCache.put('header.html','<p>this is header</p>');
$templateCache.put('home.html','<basket></basket><p>this is home page, u can do what u want to do</p>');
$templateCache.put('components/basket/basket.html','<to>jest basket</to>');
$templateCache.put('components/basket/index.html','<to>jest basket</to>');}]);