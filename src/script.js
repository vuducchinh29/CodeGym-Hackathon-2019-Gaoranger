function focusImage(elem) {
  // get all 'a' elements
  var a = document.getElementsByClassName('img-stone-1');
  // loop through all 'a' elements
  for (i = 0; i < a.length; i++) {
    // Remove the class 'active' if it exists
    a[i].classList.remove('choose')
  }
  // add 'active' classs to the element that was clicked
  elem.classList.add('choose');
}
function focusImage2(elem) {
  // get all 'a' elements
  var a = document.getElementsByClassName('img-stone-2');
  // loop through all 'a' elements
  for (i = 0; i < a.length; i++) {
    // Remove the class 'active' if it exists
    a[i].classList.remove('choose2')
  }
  // add 'active' classs to the element that was clicked
  elem.classList.add('choose2');
}
function focusImage3(elem) {
  // get all 'a' elements
  var a = document.getElementsByClassName('img-stone-3');
  // loop through all 'a' elements
  for (i = 0; i < a.length; i++) {
    // Remove the class 'active' if it exists
    a[i].classList.remove('choose3')
  }
  // add 'active' classs to the element that was clicked
  elem.classList.add('choose3');
}
