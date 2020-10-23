// check of specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
// click on delete
$("ul").on("click", ".delete", function(event){
    // using event here will stop the process of event listner events at this stage only ie the click only is been accounted for the span and not for the line or other parent element
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

function creatingTodos(){
    // creating todos
    let newTodo = $("input[type='text']").val();
    $("input[type='text']").val("");
    $("ul").append("<li><span class='delete'><i class='far fa-trash-alt'></i></span> " + newTodo + "</li>");
}
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        creatingTodos();
    }
});

$("#addTodo").click(function(){
    $("input[type='text']").fadeToggle();
});