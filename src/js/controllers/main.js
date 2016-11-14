function MainController ($scope) {
  $scope.tasks = [];

  $scope.addTask = function (title) {
    let newTask = { title: title, id: $scope.tasks.length + 1 };
    console.log(newTask);
    $scope.tasks.push(newTask);
    $scope.message = '';
  };

};

MainController.$inject = ['$scope'];
export { MainController };
