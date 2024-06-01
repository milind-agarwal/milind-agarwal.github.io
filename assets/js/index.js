

$(document).on('ready', function() {
  modepersist();
})


function modepersist() {
  if (window.localStorage["globalMode"] == 'dark-mode') {
    dark_mode()
  }
  else {
    light_mode()
  }
}

function dark_mode_background() {
  document.documentElement.style.setProperty('--body_background_color', 'rgb(29, 30, 32)');
		document.documentElement.style.setProperty('--body_text_color', 'rgb(218, 218, 219)');
}
function myFunction() {
  classList = $("#myDropdown")[0].classList;
  classList.toggle("show");
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


// $("a.lateef").click(function(){
//    // var element = $("div");
//    // element[2].style.fontFamily = "Lateef", cursive;
// });


function dark_mode() {
  window.localStorage["globalMode"] =  "dark-mode";
  // Action to change the display settings

  dark_mode_background()
  // $("body")[0].style.backgroundColor = 
  // $("body")[0].style.color = 

  anchors = $("a")
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].classList.add('dark-mode')
  }

  buttons = $("button")
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('dark-mode')
  }

  document.getElementById("myDropdown").classList.add('dark-mode')

  // Action to change the logo again 

  $("#moon-anchor")[0].style.display = 'none'
  $("#sun-anchor")[0].style.display = 'inline'
  

}

function light_mode() {
  window.localStorage["globalMode"] = ""
  // Action to change the display settings
  document.documentElement.style.setProperty('--body_background_color', '#fff' );
  document.documentElement.style.setProperty('--body_text_color', '#333332');

  // $("body")[0].style.backgroundColor = 
  // $("body")[0].style.color = 

  anchors = $("a")
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].classList.remove('dark-mode')
  }

  buttons = $("button")
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('dark-mode')
  }

  document.getElementById("myDropdown").classList.remove('dark-mode')

  // Action to change the logo again 

  $("#moon-anchor")[0].style.display = 'inline'
  $("#sun-anchor")[0].style.display = 'none'

 
}

$("a#moon-anchor").click(function(){
  dark_mode();
});

$("a#sun-anchor").click(function(){
  light_mode();

});

