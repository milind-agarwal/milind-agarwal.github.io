//
// list_of_names = $('.my_name').children()
// let display_name = sessionStorage.getItem("display_name");
// list_of_names[parseInt(display_name) - 1].style.display = 'block'
//
// var intervalId = window.setInterval(function(){
//   list_of_names = $('.my_name').children()
//   let display_name = sessionStorage.getItem("display_name");
//   if (display_name != 0) {
//     list_of_names[display_name - 1].style.display = 'none'
//   }
//   if (display_name == list_of_names.length) {
//     display_name = 0
//   }
//   list_of_names[display_name].style.display = 'block'
//   sessionStorage.setItem("display_name",parseInt(display_name) + 1);
//
// }, 2000);


// document.addEventListener('click', function(event) {
//   var specifiedElement = $("#site-nav > ul > button")[0];
//
//   var isClickInside = specifiedElement.contains(event.target);
//   if (isClickInside) {
//     // alert('You clicked inside A');
//     $("#site-nav > ul > div")[0].style.visibility = 'visible';
//   } else {
//     // alert('You clicked outsi A');
//     $("#site-nav > ul > div")[0].style.visibility = 'hidden';
//   }
// });

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$("a.lateef").click(function(){
   // var element = $("div");
   // element[2].style.fontFamily = "Lateef", cursive;
});
