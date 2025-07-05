angular.module('todoApp').service('TodoService', ['$http', function($http) {
    const baseUrl = 'https://localhost:7133/api/todo';

    this.getTodos = function() {
        return $http.get(`${baseUrl}/GetTodoItems`);
    }

    this.addTodo = function(todo) {
        return $http.post(`${baseUrl}/CreateTodoItem`, todo);
    };

    this.updateTodos = function(todos) {
        return $http.put(`${baseUrl}/UpdateTodoItems`, { items: todos });
    };

    this.deleteTodos = function(ids) {
        return $http({
            method: 'DELETE',
            url: `${baseUrl}/DeleteTodos`,
            data: ids,
            headers: { 'Content-Type': 'application/json' }
        });
    };
}]);