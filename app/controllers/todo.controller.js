angular.module('todoApp').controller('TodoController', ['$scope', 'TodoService', function($scope, TodoService) {

    // Initialize the todos array
    $scope.todos = [];

    // Initialize the new todo input
    $scope.newTodo = '';

    $scope.loadTodos = function () {
        TodoService.getTodos().then(response => {
            $scope.todos = response.data;
        });
    };

    // Function to add a new todo
    $scope.addTodo = function () {
        if (!$scope.newTodo.trim()) return;

        const todo = {
            text: $scope.newTodo,
            completed: false
        };

        TodoService.addTodo(todo).then(() => {
            $scope.newTodo = '';
            $scope.loadTodos();
        });
    };

    // Function to remove a todo by index
    $scope.removeTodo = function (index) {
        const todo = $scope.todos[index];
        TodoService.deleteTodos([todo.id]).then(() => {
            $scope.todos.splice(index, 1);
        });
    };

    // Function to get the count of completed todos
    $scope.getCompletedCount = function() {
        return $scope.todos.filter(function(todo) {
            return todo.isCompleted;
        }).length;
    };

     // Function to get the count of remaining (incomplete) todos
    $scope.getRemainingCount = function() {
        return $scope.todos.filter(function(todo) {
            return !todo.isCompleted;
        }).length;
    };

    //Mark Each as complete
    $scope.toggleComplete = function (todo) {
        todo.completed = !todo.completed;
        TodoService.updateTodos([todo]).then(() => {
            $scope.loadTodos();
        });
    };

    // Function to toggle all todos completion status
    $scope.toggleAll = function () {
        const allCompleted = $scope.todos.every(t => t.completed);
        const updatedTodos = $scope.todos.map(todo => ({
            ...todo,
            completed: !allCompleted
        }));

        TodoService.updateTodos(updatedTodos).then(() => {
            $scope.loadTodos();
        });
    };

    // Function to clear all completed todos
    $scope.clearCompleted = function () {
        const completedIds = $scope.todos
            .filter(todo => todo.completed)
            .map(todo => todo.id);

        if (completedIds.length === 0) return;

        TodoService.deleteTodos(completedIds).then(() => {
            $scope.loadTodos();
        });
    };

    $scope.getCompletedCount = () =>$scope.todos.filter(t => t.completed).length;

    $scope.getRemainingCount = () =>$scope.todos.filter(t => !t.completed).length;

    $scope.loadTodos();
}]);