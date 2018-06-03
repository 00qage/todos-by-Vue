$(document).ready(function () {
    jsAutofocus();
    var app = new Vue({
        el: '#app',
        data: {
            newtodo: '',
            todos: [],
            visibility: 'all',
            cacheTodo: {},
            cacheTitle: '',
        },
        methods: {
            addtodo: function () {
                var value = this.newtodo.trim();
                var times = Date.now();
                if (!value) {
                    return;
                }
                this.todos.push({
                    id: times,
                    title: value,
                    completed: false,
                });
                this.newtodo = '';
            },
            removetodo: function (key) {
                this.todos.splice(key, 1);
            },
            editTodo: function (item) {
                this.cacheTodo = item;
                this.cacheTitle = item.title;
            },
            cancelEdit: function () {
                this.cacheTodo = {};
            },
            doneEdit: function (item) {
                item.title = this.cacheTitle;
                item.cacheTitle = '';
                this.cacheTodo = {};
            },
            clearTodos: function () {
                this.todos = [];
            }
        },
        computed: {
            filteredTodos: function () {
                if (this.visibility == 'all') {
                    return this.todos;
                } else if (this.visibility == 'active') {
                    var newtodos = [];
                    this.todos.forEach(function (item) {
                        if (!item.completed) {
                            newtodos.push(item);
                        }
                    });
                    return newtodos;
                } else if (this.visibility == 'completed') {
                    var newtodos = [];
                    this.todos.forEach(function (item) {
                        if (item.completed) {
                            newtodos.push(item);
                        }
                    });
                    return newtodos;
                } else {
                    return [];
                }
            },
            activeLength: function () {
                var newTodos = [];
                this.todos.forEach(function (item) {
                    if (!item.completed) {
                        newTodos.push(item);
                    }
                });
                return newTodos.length;
            }
        }
    })

    // Initialize Firebase
    // var config = {
    //     apiKey: "AIzaSyD5DOPAkwvouPveyoIPoyUaB-fvRhmX_fQ",
    //     authDomain: "project-8fdae.firebaseapp.com",
    //     databaseURL: "https://project-8fdae.firebaseio.com",
    //     projectId: "project-8fdae",
    //     storageBucket: "project-8fdae.appspot.com",
    //     messagingSenderId: "886236257267"
    // };
    // firebase.initializeApp(config);


    // 送出按鈕,寫入到資料庫

    // send.addEventListener('click', function (e) {
    // console.log(todo.value);
    // todos.push({content: todo.value});
    // })
    function jsAutofocus(input) {
        if (input != null) {
            input.focus();
        }
    }

});