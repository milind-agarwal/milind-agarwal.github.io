
list_of_names = $('.my_name').children()
let display_name = sessionStorage.getItem("display_name");
list_of_names[parseInt(display_name) - 1].style.display = 'block'

var intervalId = window.setInterval(function(){
  list_of_names = $('.my_name').children()
  let display_name = sessionStorage.getItem("display_name");
  console.log(display_name)
  if (display_name != 0) {
    list_of_names[display_name - 1].style.display = 'none'
  }
  if (display_name == list_of_names.length) {
    display_name = 0
  }
  list_of_names[display_name].style.display = 'block'
  sessionStorage.setItem("display_name",parseInt(display_name) + 1);

}, 2000);
