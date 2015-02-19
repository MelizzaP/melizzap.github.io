/*
$(function() {
  $("#resume").hover(
      function() {
          $(this).attr("src", "public/img/resumegif.gif");
      },
      function() {
          $(this).attr("src", "public/img/resume.png");
      }                         
  );                  
});
*/



$('a.skills').on('click', function(e) {
  e.preventDefault();
  console.log('click')
  $('#skillsModal').foundation('reveal','open');
});

$('#skillsModal').foundation('reveal', 'close');