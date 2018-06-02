$(document).ready(function () {

    var app = new Vue({
        el: '#app',
        data: {
            newtodo:'',
            todos:[],

        },
        methods:{
            addtodo:function () {
                var value = this.newtodo;
                var times = Date.now();
                this.todos.push({
                    id:times,
                    title:value,
                    completed:false
                });
                this.newtodo = '';
               }
        },
        computed:{
            
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

    

});