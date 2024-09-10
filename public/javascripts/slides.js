// function plusDivs(e)
// {
//   showDivs(slideIndex += e)
// }

// function currentDiv(e)
// {
//   showDivs(slideIndex = e)
// }

// function showDivs(e)
// {
//   var s, n = document.getElementsByClassName("mySlides"),
//     d = document.getElementsByClassName("dots");
//   for (e > n.length && (slideIndex = 1), e < 1 && (slideIndex = n.length), s = 0; s < n.length; s++) n[s].style.display = "none";
//   for (s = 0; s < d.length; s++) d[s].className = d[s].className.replace(" w3-white", "");
//   n[slideIndex - 1].style.display = "block", d[slideIndex - 1].className += " w3-white"
// }
// var slideIndex = 1;
// showDivs(slideIndex)
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 4 seconds
}