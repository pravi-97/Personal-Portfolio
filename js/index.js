var ratingSet = false;
var stars = 0;
function ratingMOver(object, starCount) {
  if (ratingSet == false) {
    for (var i = 0; i < starCount; i++) {
      object.children[i].style.color = "#ffde78"
    }
  }
}

function ratingMOut(object, starCount) {
  if (ratingSet == false) {
    for (var i = 0; i < starCount; i++) {
      console.log(starCount - 1);
      object.children[i].style.color = "#fff"
    }
  }
}

function ratingMClick(object, starCount) {
  for (var i = 0; i < starCount; i++) {
    object.children[i].style.color = "#ffc107"
  }
  ratingSet = true;
  stars = starCount;
  console.log(stars)
}