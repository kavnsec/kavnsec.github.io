function fetchAPI() {
    let val = document.getElementById("name");
    let pokeName = val.value.toLowerCase();;

    try {
    rawData = localStorage.getItem(pokeName);
    } catch (e) {
        localStorage.clear();
        localStorage.removeItem(pokeName);
        rawData = localStorage.getItem(pokeName);
        rawData = null;
    }

    if(!rawData)
    {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName)
        .then(response => response.json())
        .then(data => {
            console.log("Brand new fetch.");
            console.log(data);

            try {
            cachePokemon(pokeName, data);
            }
             catch (e) {
            localStorage.clear();
            localStorage.removeItem(pokeName);
            rawData = localStorage.getItem(pokeName);
            rawData = null;
            }
            console.log(localStorage.getItem(pokeName));
            console.log(data.sprites.front_default);
            setImg(data.sprites.front_default);
            setAudio(data.cries.latest);
            setMoves(data.moves);
        });         
    }
    else {
    console.log("This was loaded from cache.");
    console.log(localStorage.getItem(pokeName));
    const data = JSON.parse(rawData);
    setImg(data.sprites.front_default);
    setAudio(data.cries.latest);
    setMoves(data.moves);
    }
}
    

function cachePokemon(id, data) {
    localStorage.setItem(id.toLowerCase(), JSON.stringify(data));
}

function setImg(url) {
    image = document.getElementById("pokemonImg");
    image.src = url;
}

function setAudio(url) {
    audio = document.getElementById("audioSource");
    audio.src = url;
}

function setMoves(movesArray) {
    moves = document.getElementsByClassName("moves");

    for(let x = 0; x <moves.length; x++) {
        while(moves[x].firstChild) {
            moves[x].removeChild(moves[x].lastChild);
        }
    for(let i = 0; i < movesArray.length; i++)
    {
        newMove = document.createElement('option');
        newMove.value = movesArray[i].move.name;
        newMove.innerHTML = movesArray[i].move.name;

        moves[x].appendChild(newMove);
    }
    }
}

function addToTeam(){

    image = document.getElementById("pokemonImg").src;

    move1 = document.getElementById("move1").value;
    move2 = document.getElementById("move2").value;
    move3 = document.getElementById("move3").value;
    move4 = document.getElementById("move4").value;

    team = document.getElementById("team");

    pokemonDiv = document.createElement('div');
    pokemonDiv.style.display = "flex";
    pokemonDiv.style.alignItems = "flex-start";

    newImage = document.createElement('img');
    newImage.src = image;

    pokemonDiv.appendChild(newImage);

    newImage.style.display = "inline-block";

    newMoveList = document.createElement('ul');
    li1 = document.createElement('li');
    li2 = document.createElement('li');
    li3 = document.createElement('li');
    li4 = document.createElement('li');

    li1.textContent = move1;
    li2.textContent = move2;
    li3.textContent = move3;
    li4.textContent = move4;

    newMoveList.appendChild(li1);
    newMoveList.appendChild(li2);
    newMoveList.appendChild(li3);
    newMoveList.appendChild(li4);

    newMoveList.style.textAlign = "left";

    pokemonDiv.appendChild(newMoveList)

    team.appendChild(pokemonDiv);
}