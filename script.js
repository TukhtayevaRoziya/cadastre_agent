
window.onload = initPage;

function addEventHandler(obj, eventName, handler) {
  if (document.attachEvent) {
    obj.attachEvent("on" + eventName, handler);
  } else if (document.addEventListener) {
    obj.addEventListener(eventName, handler, false);
  }
}
function initPage() {/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;


  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#dynamic").addClass("newClass");
    } else {
      $("#dynamic").removeClass("newClass");
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#dynamic2").addClass("newClass");
     console.log("scrol")

    } else {
      $("#dynamic2").removeClass("newClass");
    }
  });
}
