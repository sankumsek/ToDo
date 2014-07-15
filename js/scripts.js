
$(document).ready(function() {
  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedTask = $("input#new-task").val();
    var inputtedDoBy = $("input#new-doby").val();
    var newContact = { firstName: inputtedName,
                       firstTask: inputtedTask,
                       duedate: inputtedDoBy };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $("input#new-name").val("");
    $("input#new-task").val("");
    $("input#new-doby").val("");

  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName + " " + newContact.firstTask);
    $(".new-name").text(newContact.firstName);
    $(".new-task").text(newContact.firstTask);
    $(".new-doby").text(newContact.duedate);
    })
  $(".contact2").last().click(function(){
    $("#completedTask").show();
    $("#completedTask h4").text(newContact.firstTask).css("text-decoration", "line-through");;
  });
  });
});
