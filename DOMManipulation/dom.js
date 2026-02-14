function showFilter() {
    const filterArticle = document.getElementById("filterContent");

    if(filterArticle.style.display == "block") {
    filterArticle.style.display = "none";
    } else {
        filterArticle.style.display = "block";
    }
}

function showAddNew() {
    const addNewArticle = document.getElementById("newContent");

    if(addNewArticle.style.display == "block") {
    addNewArticle.style.display = "none";
    } else {
        addNewArticle.style.display = "block";
    }
}

function addNewArticle() {
    const newArticle = document.createElement("article");
    let articleType = "";
    let marker = "";

    //title and text grab
    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;

    //radio buttons grab article type
    let opinionRadio = document.getElementById("opinionRadio");
    let recipeRadio = document.getElementById("recipeRadio");
    let updateRadio = document.getElementById("lifeRadio");

    if(opinionRadio.checked) {
        articleType = "opinion";
        marker = "opinion";
    }

    if(recipeRadio.checked) {
        articleType = "recipe";
        marker = "recipe";
    }

    if(updateRadio.checked) {
        articleType = "update";
        marker = "update";
    }

    //new marker
    const newMarker = document.createElement("span");

    //marker formatting
    newMarker.classList.add("marker");
    newMarker.textContent = marker[0].toUpperCase() + marker.slice(1);

    //h2 tag
    const newTitle = document.createElement("h2");

    //h2 formatting
    newTitle.textContent = title;

    //p tag
    const newParagraph = document.createElement("p");

    //p formatting
    newParagraph.textContent = text;

    //p tag with nested a tag
    const linkContainer = document.createElement("p");
    const nestedLink = document.createElement("a");
    nestedLink.textContent = "Read more...";
    nestedLink.href = "moreDetails.html";

    linkContainer.appendChild(nestedLink);

    //articleType
    newArticle.classList.add(articleType);

    //appending marker, h2, p tag, and p tag with a tag inside
    newArticle.appendChild(newMarker);
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newParagraph);
    newArticle.appendChild(linkContainer);

    document.getElementById("articleList").appendChild(newArticle);
}

function filterArticles() {
    const opinionBox = document.getElementById("opinionCheckbox");
    const recipeBox = document.getElementById("recipeCheckbox");
    const updateBox = document.getElementById("updateCheckbox");

    const opinionArticles = document.getElementsByClassName('opinion');
    const recipeArticles = document.getElementsByClassName('recipe');
    const updateArticles = document.getElementsByClassName('update');

    articleShower(opinionArticles);
    articleShower(recipeArticles);
    articleShower(updateArticles);

    if(opinionBox.checked != true) {
        articleHider(opinionArticles);
    }

    if(recipeBox.checked != true) {
        articleHider(recipeArticles);
    }

    if(updateBox.checked != true) {
        articleHider(updateArticles);
    }
}

function articleHider(selector) {
    for(let i = 0; i < selector.length; i++) {
        selector[i].style.display = "none";
    }
}

function articleShower(selector) {
    for(let i = 0; i < selector.length; i++) {
        selector[i].style.display = "inline-block";
    }
}