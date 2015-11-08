angular.module('codefeedApp')
  .controller('CodeFeedCtrl', ['$scope', '$http',
    function ($scope, $http) {
      $scope.name = 'Dick Treichel';
      $scope.languages = [];

      _.each(['html', 'css', 'js'], function (extension) {
        $http.get('http://codepen.io/RWTreichel/pen/bVmRPp.' + extension)
          .success(function (response) {
            $scope.languages.push(response);
          });
      });
    }]);