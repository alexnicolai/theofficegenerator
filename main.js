let beforeJamButton = document.getElementById("beforeJamButton");
let afterJamButton = document.getElementById("afterJamButton");
let episodeNumber = document.getElementById("episodeNumber");
let resultsBox = document.getElementById("resultsBox");

var episodes = [];

for (a = 1.01; a <= 1.06; a = a + .01) {
  episodes.push(Math.round(a * 1e2) / 1e2);
}

for (b = 2.01; b <= 2.22; b = b + .01) {
    episodes.push(Math.round(b * 1e2) / 1e2);
  }
  
for (c = 3.01; c <= 3.25; c = c + .01) {
    episodes.push(Math.round(c * 1e2) / 1e2);
  }
  
for (d = 4.01; d <= 4.19; d =  d + .01) {
    episodes.push(Math.round(d * 1e2) / 1e2);
  }
  
for (e = 5.01; e <= 5.28; e = e + .01) {
    episodes.push(Math.round(e * 1e2) / 1e2);
  }
  
for (f = 6.01; f <= 6.26; f = f + .01) {
    episodes.push(Math.round(f * 1e2) / 1e2);
  }
  
for (g = 7.01; g <= 7.27; g = g + .01) {
    episodes.push(Math.round(g * 1e2) / 1e2);
  }
  
for (h = 8.01; h <= 8.24; h = h + .01) {
    episodes.push(Math.round(h * 1e2) / 1e2);
  }
  
for (i = 9.01; i <= 9.27; i = i + .01) {
    episodes.push(Math.round(i * 1e2) / 1e2);
  }

  //Before JAM Function
function bJamFunction() {
  var bJam = [];

  var start = episodes.indexOf(1.01);
  var end = episodes.indexOf(4.01);
  
  for (x = start; x <= end; x = x + 1) {
      bJam.push(episodes[x]);
  }
  
  var randomEpisode = bJam[Math.floor(Math.random()* bJam.length)];
//Adds html element
  episodeNumber.innerHTML = randomEpisode;
    resultsBox.classList.add('fadeInUp');
    resultsBox.style.display="block";
}

//After JAM Function

function aJamFunction() {
var aJam = [];

var start = episodes.indexOf(4.02);
var end = episodes.indexOf(9.27);

for (x = start; x <= end; x = x + 1) {
    aJam.push(episodes[x]);
}

var randomEpisode = aJam[Math.floor(Math.random()* aJam.length)];
//Adds html element
episodeNumber.innerHTML = randomEpisode;
resultsBox.classList.add('fadeInUp');
resultsBox.style.display="block";
}

/*function testButton() {
    var episodes = [];

    for (a = 1; a <= 6; a++) {
    episodes.push(a);
    }
var randomEpisode = episodes[Math.floor(Math.random()*episodes.length)];

episodeNumber.innerHTML = randomEpisode;
resultsBox.classList.add('fadeInUp');
resultsBox.style.display="block";*/

//alert(randomEpisode).reload();



beforeJamButton.addEventListener('click', bJamFunction, true);

afterJamButton.addEventListener('click', aJamFunction, true);

