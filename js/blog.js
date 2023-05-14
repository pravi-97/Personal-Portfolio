fetch("shows.json")
    .then(response => response.json())
    .then(data => createList(data));

function createList(data) {
    const mainUL = document.createElement('ul');
    mainUL.setAttribute('class', 'list-group')
    for (let i = 0; i < data.shows.length; i++) {
        const showsList = document.createElement('li');
        showsList.setAttribute('class', 'list-group-item')
       
        const CrLink = document.createElement('a')
        CrLink.href = data.shows[i].imdbLink;
        CrLink.innerHTML = data.shows[i].show;
        CrLink.target = "_blank";
        showsList.appendChild(CrLink);
        mainUL.appendChild(showsList);
    }
    document.getElementById("hello").appendChild(mainUL);
}
// read content from other websites
/*function fetchWebsiteData(url) {
  return new Promise(function (resolve, reject) {
    var proxyUrl = "https://api.allorigins.win/get?url="; // use a proxy server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", proxyUrl + encodeURIComponent(url), true);
    xhr.setRequestHeader("Accept", "text/html");
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          var parser = new DOMParser();
          var htmlDoc = parser.parseFromString(
            JSON.parse(this.responseText).contents,
            "text/html"
          );
          resolve(htmlDoc);
        } else {
          reject("Error: " + xhr.status);
        }
      }
    };
    xhr.send();
  });
}

fetch("/data.txt")
  .then((response) => response.text())
  .then((data) => {
    const cleanedData = data.replace(/[\r\n\t]/g, "");
    const valuesArray = cleanedData.split(",");

    valuesArray.forEach((element) => {
      fetchWebsiteData(element)
        .then(function (htmlDoc) {
          var title = htmlDoc.getElementsByClassName("mw-page-title-main")[0].textContent;
          document.get;
          const img = htmlDoc.querySelector(".infobox-image img");
          const srcCopy = img.getAttribute("src");
          const div = document.createElement("div")
          const picture = document.createElement("img");
          picture.setAttribute("src", srcCopy);
          picture.setAttribute("alt", title);
          const p = document.createElement("p")
          p.innerHTML = title;
          div.appendChild(picture);
          div.appendChild(p);
          document.getElementById("myDIV").appendChild(div);
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  })
  .catch((error) => {
    console.error("Error reading the file:", error);
  });


 */