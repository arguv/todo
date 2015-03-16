$(function () {
    create_new_list();
});

var i = localStorage.length;

function save_todo() {
    var todo = $("#input_text").val();

    if (todo.length) {

        localStorage[i] = todo;

        $("#todo_list").append('<li id="' + i + '"><a href="#popup" onClick="get_id(this);">' + todo + '</a></li>');

        $("#todo_list").listview();
        $("#todo_list").listview("refresh");
        i++;
    }
}

function create_new_list() {

    for (var i = 0; i < localStorage.length; i++) {

        todo = localStorage.getItem(i);

        $("#todo_list").append('<li id="' + i + '"><a href="#popup" onClick="get_id(this);">' + todo + '</a></li>');
    }

    $("#todo_list").listview();
    $("#todo_list").listview("refresh");
}

function del_todo(e) {

    localStorage.removeItem(this.item);

    for (i = 0; i < localStorage.length; i++) {
        if (!localStorage.getItem(i)) {
            localStorage.setItem(i, localStorage.getItem(i + 1));
            localStorage.removeItem(i + 1);
        }
    }

    $("#todo_list").html("");

    create_new_list();
}

function get_id(e) {

    this.item = $(e).closest("li").attr("id");
    this.val = localStorage.getItem(this.item);

}

function done_todo(e) {

    this.val = localStorage.getItem(this.item);
    if ((this.val.indexOf("<del>") == -1)) {
        localStorage.setItem(this.item, '<del>' + this.val + '</del>');
    }

    $("#todo_list").html("");

    create_new_list();
}