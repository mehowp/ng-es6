/* scripts/services/UserService.js */

class TodoService {
    constructor($http) {
        this.$http = $http;
    }
    getTodos() {
        return this.$http.get('/api').then(response => response.data);
    }
}

TodoService.$inject = ['$http'];

export default TodoService;
