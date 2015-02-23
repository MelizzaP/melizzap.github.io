$(function() {
  $("#tech-blog").hover(
      function() {
          $(this).attr("src", "public/img/Techblag.gif");
      },
      function() {
          $(this).attr("src", "public/img/techblog.png");
      }                         
  );                  
});
