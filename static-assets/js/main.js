// Generated by CoffeeScript 1.6.3

$(function() {

  // contact form animations
  $('#give-button').click(function() {
    $('#giveForm').fadeIn();
  });
  $('#get-button').click(function() {
    $('#getForm').fadeIn();
  });
  $(document).mouseup(function (e) {
    var container = $(".Form");
    //
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0 // ... nor a descendant of the container
        && ($('.Form').is(":visible")))

    {
      window.location = "home";
      container.fadeOut();
    }
  });

});

/*
//@ sourceMappingURL=main.map
*/

// post view


$(document).ready(function() {
    $('#list').click(function(event){
      event.preventDefault();
      $('#posts .item').addClass('list-group-item');
    });

    $('#grid').click(function(event){
      event.preventDefault();
      $('#posts .item').removeClass('list-group-item');
      $('#posts .item').addClass('grid-group-item');
    });
});