

let plusExpander = $("h3");
plusExpander.on("click", function () {
  if ($(window).width() < 768) {
    $(this).next("ul").slideToggle(); //$(this) refers to the clicked <h3>.
    $(this).toggleClass("slideup");
  }
});


$(window).on("resize",function(){
  location.reload();
})
