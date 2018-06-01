$(document).ready(function () {

    var app = new Vue({
        el: '#app',
        data: {
            good: 'hello worl!!',
            ok: true,
            no: false,
            me: 'QOO',
        }
    })

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD5DOPAkwvouPveyoIPoyUaB-fvRhmX_fQ",
        authDomain: "project-8fdae.firebaseapp.com",
        databaseURL: "https://project-8fdae.firebaseio.com",
        projectId: "project-8fdae",
        storageBucket: "project-8fdae.appspot.com",
        messagingSenderId: "886236257267"
    };
    firebase.initializeApp(config);

    //dom
    var body = document.body;
    var todo = document.getElementById('todo');
    var send = document.getElementById('send');
    var list = document.getElementById('list');
    var listR = document.getElementById('listR');
    var reverse = document.getElementById('reverse');
    //todos
    var todos = firebase.database().ref('todos');

    // 送出按鈕,寫入到資料庫

    // send.addEventListener('click', function (e) {
    // console.log(todo.value);
    // todos.push({content: todo.value});
    // })

    //按ENTER也可寫入資料
    $("#todo").keydown(function (e) {
        if (e.keyCode == 13) {
            console.log(todo.value);
            todos.push({
                content: todo.value
            });
            // textboxes = $("#todo");
            // currentBoxNumber = textboxes.index(this);
            // if (textboxes[currentBoxNumber] != null) {
            // nextBox = textboxes[currentBoxNumber + 1];
            // nextBox.focus();
            // nextBox.select();
            // }
            // e.preventDefault();
            todo.value = "";
            return false;
        }
    });



    //顯示資料
    todos.on('value', function (snapshot) {
        var str = '';
        var data = snapshot.val();
        for (var item in data) {
            // console.log(item);
            // console.log(data[item].content);
            str += `<li data-key="${[item]}"><label for="ta"></label>${data[item].content}</li>`
        }
        // list.innerHTML = str;
    })

    //時間設定
    // timeSend.addEventListener('click', function (e) {
    //     console.log(time.value);
    //     var now = new Date(time.value);
    //     var starTime = now.setHours(0, 0, 0, 0)
    //     console.log(starTime);
    //     var endTime = now.setHours(23, 59, 59, 999);
    //     console.log(endTime);
    // })

    //刪除邏輯
    // list.addEventListener('click', function (e) {
    //     if (e.target.nodeName == 'LI') {
    //         var key = e.target.dataset.key;
    //         todos.child(key).remove();
    //     }
    // })

    //資料翻轉
    // todos.on('value', function (snapshot) {
    //     var str = '';
    //     var data = [];
    // snapshot.forEach(function (item) {
    // data.push({
    // key: item.key,
    // content: item.val().content
    // });
    // data.push(item);
    // console.log(data);
    // })
    // data.reverse();
    // for (var item in data) {

    // console.log(data[item].key);
    // console.log(data[item].content);

    // str += `<li data-key="${data[item].key}">${data[item].content}</li>`
    // }
    // listR.innerHTML = str;
    // })
    //刪除邏輯(R)
    // listR.addEventListener('click', function (e) {
    //     if (e.target.nodeName == 'LI') {
    //         var key = e.target.dataset.key;
    //         todos.child(key).remove();
    //     }
    // })

    //fade

    // $('#reverse').click(function (e) {
    //     e.preventDefault();


    //     $('#listR,#list').fadeToggle(1000);
    // });

    //順序更換
    $('#reverse').click(function () {
        // 取得被點擊的 li 的索引位置並加一
        // var choose = $(this).index();
        // console.log(choose);

        // 移除被點擊外的 li 的 class
        // $('.list').removeClass('active');
        // 被點擊的 li 增加 class
        // $(this).addClass('active');

        // $('.todo-content ul').removeClass('active');
        $('.todo-content ul').toggleClass('active');
        // $('.todo-content ul:nth-child(' + choose + ')').addClass('active');

    });



    //forEach 資料排序
    //   todos.orderByChild('')

    // 2500以上       2500以下      等於2500
    //.startAt(2500).endAt(2500).equalTo(2500)

    // 從前面撈1筆資料       從後面撈2筆資料
    //.limitToFirst(1)   .limitToLast(2)
    //   .once('value',function (snapshot) {
    //       snapshot.forEach(function (item) {
    //           console.log(item.val());

    //         })
    //     })



});