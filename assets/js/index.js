display_name = 1
var intervalId = window.setInterval(function(){
  list_of_names = $('.my_name').children()
  if (display_name != 0) {
    list_of_names[display_name - 1].style.display = 'none'
  }
  if (display_name == list_of_names.length) {
    display_name = 0
  }
  list_of_names[display_name].style.display = 'block'
  display_name = display_name + 1
}, 2000);
