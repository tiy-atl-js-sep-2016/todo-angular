function MainController ($scope) {
  console.log("hello from main.js");
  console.log($scope);
  $scope.message = "Hello from scope";
};

MainController.$inject = ['$scope'];
export { MainController };
