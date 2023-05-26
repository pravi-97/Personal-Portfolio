var ratingSet = false;
var stars = 0;
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