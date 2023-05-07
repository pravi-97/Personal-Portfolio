fetch("shows.json")
    .then(response => response.json())
    .then(data => createList(data));

function createList(data) {
    console.log(data);
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