$(document).ready(function() {
  $(function(){
      $("#android").click(function(){
          alert("Link to download.");
      });
  });
});
function h(e) {
  $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight);
}
$('textarea').each(function () {
  h(this);
}).on('input', function () {
  h(this);
});
