let btn = $("#btn");
let btn2 = $("#btn2");
let btn3 = $("#btn3");
let obj = {};
let link = 'https://jsonplaceholder.typicode.com/posts'


$(document).ready(function(){

    $.get(link).done(function(data){
        $.map(data,  function(post){
            $(".container").append("<h3>" + post.title + "</h3>" + "<p><i>" + post.body + "</i></p>")
        })
    });


});


$("#postForm").submit(function(e){
    e.preventDefault();
    
    let title = $("#title").val();
    let body = $("#body").val();
    let url = $(this).attr('action');

    $.post(url, {
        title: title,
        body: body
    }).done(function(data){
        $(".postContainer").append("<h3>" + data.title + "</h3>" + "<p>" + data.body + "</p>");
    })
});







btn.on("click", () => {
    $("p").wrap("<div>");
});

btn2.on("click", () => {
    $("p").unwrap();
});

btn3.on("click", () => {
    $("p").wrapAll("<div>");
});