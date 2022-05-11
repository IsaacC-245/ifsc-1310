$(document).ready(function(){

	$(".collapsible-content summary details h2").eq(0).addClass("active");
	$(".collapsible-content details p").eq(0).show();

	$(".collapsible-content summary details h2").click(function(){
	  $(this).next("p").slideToggle("slow")
	  .siblings("p:visible").slideUp("slow");
	  $(this).toggleClass("active");
	  $(this).siblings("h2").removeClass("active");
	});
	
});