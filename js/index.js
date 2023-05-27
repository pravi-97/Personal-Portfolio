var ratingSet = false;
var stars = 0;
var isValidFullName = false;
var isValidOccupation = false;
var isValidCompany = false;
var isValidEmail = false;
var isValidReviewTitle = false;
var isValidReviewComment = false;
var isProjectValue = "";
errorMessage = document.getElementById("errorMessage");
errorMessage.style.visibility = "hidden";
starsDiv = document.getElementById("review-stars");
reviewForm = document.getElementById("form-content");
displayonProjectTrue = document.getElementById("displayonProjectTrue");
displayonProjectTrue.style.display = "none"
displayonProjectTrueCopy = document.getElementById("displayonProjectTrueCopy");
displayonProjectTrueCopy.style.display = "none"


function ratingMOver(object, starCount) {
  if (ratingSet == false) {
    for (var i = 0; i < starCount; i++) {
      object.children[i].style.color = "#ffde78";
    }
  } else if (starCount > stars) {
    for (var i = stars; i < starCount; i++) {
      object.children[i].style.color = "#ffde78";
    }
  }
}

function ratingMOut(object, starCount) {
  if (ratingSet == false) {
    for (var i = 0; i < starCount; i++) {
      object.children[i].style.color = "#fff";
    }
  } else if (starCount > stars) {
    for (var i = stars; i < starCount; i++) {
      object.children[i].style.color = "#fff";
    }
  }
}

function ratingMClick(object, starCount) {
  if (stars < starCount) {
    for (var i = 0; i < starCount; i++) {
      object.children[i].style.color = "#ffc107";
    }
  } else {
    for (var i = starCount; i < 5; i++) {
      object.children[i].style.color = "#fff";
    }
  }
  ratingSet = true;
  stars = starCount;
}

function resetClicked() {
  if (confirm("Are you sure you want to reset the form?")) {
    for (var i = 0; i < 5; i++) {
      starsDiv.children[i].style.color = "#fff";
    }
    ratingSet = false;
    stars = 0;
    isProjectValue = "";
    reviewForm.reset();
    displayonProjectTrue.style.display = "none";
    displayonProjectTrueCopy.style.display = "none";
    document.getElementById("isProjectQuestion").style.borderColor = "yellow";
    document.getElementById("formStarRating").style.borderColor = "yellow";
    errorMessage.style.visibility = "hidden";
    changeBorder(fullName, false);
    changeBorder(occupation, false);
    changeBorder(company, false);
    changeBorder(eMAil, false);
    changeBorder(reviewTitle, false);
    changeBorder(reviewComment, false);
  }
}

function validateInputs() {
  var fullName = document.getElementById("fullName");
  var occupation = document.getElementById("occupation");
  var company = document.getElementById("company");
  var eMAil = document.getElementById("eMAil");
  var reviewTitle = document.getElementById("reviewTitle");
  var reviewComment = document.getElementById("reviewComment");
  var formStarRating = document.getElementById("formStarRating");

  var phoneNo = document.getElementById("phoneNo");
  var projLink = document.getElementById("projLink");
  var question1 = document.getElementById("question1");
  var question2 = document.getElementById("question2");
  var question3 = document.getElementById("question3");

  var isProjectYes = document.getElementById("isProjectYes");
  var isProjectNo = document.getElementById("isProjectNo");
  if (!isProjectYes.checked && !isProjectNo.checked) {
    changeBorder(document.getElementById("isProjectQuestion"), true);
  } else document.getElementById("isProjectQuestion").style.borderColor = "yellow";

  isValidFullName = changeBorder(fullName, true);
  isValidOccupation = changeBorder(occupation, true);
  isValidCompany = changeBorder(company, true);
  isValidEmail = changeBorder(eMAil, true);
  isValidReviewTitle = changeBorder(reviewTitle, true);
  isValidReviewComment = changeBorder(reviewComment, true);

  if (stars == 0) {
    formStarRating.style.borderColor = "red";
  } else formStarRating.style.borderColor = "yellow";
  if (!isValidFullName || !isValidOccupation || !isValidCompany || !isValidEmail || !isValidReviewTitle || !isValidReviewComment) {
    errorMessage.style.visibility = "visible";
    event.preventDefault();
    submitForm();
  }else 
  submitForm();
}

function changeBorder(ele, isValidate) {
  if (isValidate == true) {
    if (ele.value == "" || ele.value == null) {
      ele.style.borderColor = "red";
      return false;
    }
    else {
      ele.style.borderColor = "yellow";
      return true;
    }
  }
  else ele.style.borderColor = "yellow";
}

function clickedRadio() {
  if (document.getElementById("isProjectYes").checked == true) {
    displayonProjectTrue.style.display = "block";
    displayonProjectTrueCopy.style.display = "block";
    isProjectValue = "Yes";
  } else if (document.getElementById("isProjectNo").checked == true) {
    displayonProjectTrue.style.display = "none";
    displayonProjectTrueCopy.style.display = "none";
    isProjectValue = "No";
  }
  document.getElementById("isProjectQuestion").style.borderColor = "yellow";
}

function submitForm(){
  var fullName = document.getElementById("fullName");
  var occupation = document.getElementById("occupation");
  var company = document.getElementById("company");
  var eMAil = document.getElementById("eMAil");
  var reviewTitle = document.getElementById("reviewTitle");
  var reviewComment = document.getElementById("reviewComment");
  var phoneNo = document.getElementById("phoneNo");
  var projLink = document.getElementById("projLink");
  var question1 = document.getElementById("question1");
  var question2 = document.getElementById("question2");
  var question3 = document.getElementById("question3");

  console.log(fullName.value);
  console.log(occupation.value);
  console.log(company.value);
  console.log(eMAil.value);
  console.log(reviewTitle.value);
  console.log(reviewComment.value);
  console.log(stars);
  console.log(isProjectValue);
  console.log(phoneNo.value);
  console.log(projLink.value);
  console.log(question1.value);
  console.log(question2.value);
  console.log(question3.value);
}