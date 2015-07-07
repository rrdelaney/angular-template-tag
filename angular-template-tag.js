angular.module('templateTag')
.directive('template', ['$templateCache', function($templateCache) {
    return {
        restrict: 'E',
        terminal: true,
        compile: function(element, attr) {
            var templateUrl = attr.url,
                text = element[0].innerHTML;

            $templateCache.put(templateUrl, text);
        }
    };
}]);
