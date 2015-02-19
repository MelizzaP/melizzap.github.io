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

$('a.open-resume').on('click', function() {
  $('#resumeModal').foundation('reveal','open');
});

$('#resumeModal').foundation('reveal', 'close');