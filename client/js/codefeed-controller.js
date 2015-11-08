angular.module('codefeedApp')
  .factory('appFactory', function(){ return {} })
  .controller('CodeFeedCtrl', ['$scope', '$http', 'appFactory',
    function ($scope, $http, appFactory) {
      $scope.name = 'Dick Treichel';
      $scope.nameObj = {name: 'Dick Treichel'};
      $scope.languages = [];
      appFactory.languages = [];
      _.each(['html', 'css', 'js'], function (extension) {
        $http.get('http://codepen.io/RWTreichel/pen/bVmRPp.' + extension)
          .success(function (response) {
            $scope.languages.push(response);
            appFactory.languages.push(response);
          });
      });
    }])
  .value("pen", CodeFeedDisplay)
  .directive('pencode', ['reactDirective', function(reactDirective){
    return reactDirective(CodeFeedDisplay);
  }]);