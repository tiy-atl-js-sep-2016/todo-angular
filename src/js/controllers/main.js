function MainController ($scope) {
  $scope.tasks = [];
  $scope.example = {
    name: 'jurgen',
    breed: 'mixed',
    cuteness: '100 emoji'
  };
  $scope.buttonTitle = "this is a button";

  $scope.changeTitle = function () {
    $scope.buttonTitle = "Buttons are dumb";
  };

  $scope.addTask = function (title) {
    let newTask = { title: title, id: $scope.tasks.length + 1 };
    console.log(newTask);
    $scope.tasks.push(newTask);

    $scope.message = '';
  };

};

MainController.$inject = ['$scope'];
export { MainController };
