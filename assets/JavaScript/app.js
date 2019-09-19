var buttonChoices = ["Sasuke", "Full Metal Alchemist", "Dragon Ball Z", "SAO", "One Punch Man", "Attack on Tittan", "The Seven Deadly Sins", "Fairy Tail", "Shokugeki no Soma", "Bleach", "My Hero Academia" ];

function createButtons()
    {
    document.getElementById("buttonsDiv").innerHTML =""; 
        for(var i=0;i<buttonChoices.length;i++){
        varNewButton = "<button class='buttonToClick' onclick = 'getGiphyData(\""+buttonChoices[i]+"\")' >" +buttonChoices[i]+ "</button>";
        document.getElementById("buttonsDiv").innerHTML += varNewButton;
        }
    }


document.getElementById("addTopic").addEventListener("click", function () {
    buttonChoices.push( document.getElementById("topic").value);
    createButtons();
});

function getGiphyData(topic) {
    document.getElementById("results").innerHTML = "Gif's coming Soon!";

    var response = [];
    response.length = 0;
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q=" + topic + "&offset=0&rating=PG-13&lang=en&limit=20",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        document.getElementById("results").innerHTML = "";
        for (var i = 0; i < response.data.length; i++) {
            var newDiv = "";

            newDiv =" <div class='gifBox'> <img class='gifDiv' id='gif-" + "'(" + i + ")' now='moving' stillUrl='" + response.data[i].images.fixed_height_still.url + "' movingUrl='" + response.data[i].images.fixed_height.url + "' src='" + response.data[i].images.fixed_height.url + "'><div class='gifTitleDiv'>Rated: "+response.data[i].rating+"</div></div>";
            document.getElementById("results").innerHTML += newDiv;
        }
    });
}



createButtons();