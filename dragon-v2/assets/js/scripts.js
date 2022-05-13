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

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;
  
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
  
// Initial slide
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
  
// Show previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
  
// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
  
// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
  
// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
  
startSlide();