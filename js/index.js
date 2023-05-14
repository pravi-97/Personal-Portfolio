function validateForm() {
  var fullName = document.getElementById("fullName")
  var eMAil = document.getElementById("eMAil")
  var contactReason = document.getElementById("contactReason")
  var comment = document.getElementById("comment")

  if (fullName.value == "") {
    displayMessage(fullName);
  }
  if (eMAil.value == "") {
    displayMessage(eMAil);
  }
  if (contactReason.value == "") {
    displayMessage(contactReason);
  }
  if (comment.value == "") {
    displayMessage(comment);
  }

}

function displayMessage(obj) {
  var x = obj.parentElement.lastElementChild;
  x.style.visibility = "visible";
  event.preventDefault()
  event.stopPropagation()
  obj.classList.add("is-invalid");
}

function removeRed(){

}