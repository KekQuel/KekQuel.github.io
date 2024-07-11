const leftButton = document.querySelector(".leftButton");
const rightButton = document.querySelector(".rightButton");
const audio = document.querySelector("#musicAudio");
const audioSource = document.querySelector("#audioSource");
const musicTitle = document.querySelector("#musicTitle");
const musicThumbnail = document.querySelector("#musicThumbnail");
const musicIndexDiv = document.getElementById('musicIndex');
const musicIndexChildren = musicIndexDiv.querySelectorAll('span');
const musicBackground = document.querySelector(".musicPlaylistContainer");
const audioLinks = [
    "audios/IntoTheNight.mp3",
    "audios/ComparedChild.mp3",
    "audios/Lemon.mp3",
    "audios/Fukakouryoku.mp3",
    "audios/GoodbyeDeclaration.mp3"
];
const audioTitles = [
    "YOASOBI - Into The Night「夜に駆ける」",
    "TUYU - Compared Child「くらべられっ子」",
    "Kenshi Yonezu - Lemon",
    "Vaundy - Fukakouryoku「不可幸力」",
    "Chinozo - Goodbye Declaration feat. flower"
];
const audioThumbnails = [
    "images/IntoTheNight.jpeg",
    "images/ComparedChild.jpg",
    "images/Lemon.jpg",
    "images/Fukakouryoku.jpeg",
    "images/GoodbyeDeclaration.jpg"
];

const audioBackgroundColour = [
    "rgba(246, 87,117, 0.5)",
    "rgba(203,223,234, 0.5)",
    "rgba(91, 99, 99, 0.5)",
    "rgba(173,251,251, 0.5)",
    "rgba(253,223,150, 0.5)"
];

const audioBackgroundShadow = [
    "0 0 15px 30px rgba(246, 87,117, 0.5)",
    "0 0 15px 30px rgba(203,223,234, 0.5)",
    "0 0 15px 30px rgba(91, 99, 99, 0.5)",
    "0 0 15px 30px rgba(173,251,251, 0.5)",
    "0 0 15px 30px rgba(253,223,150, 0.5)",
];
let playlistIndex = 0;



const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

leftButton.addEventListener("click", () => changeAudio(-1));
rightButton.addEventListener("click", () => changeAudio(1));

function changeAudio(num) {
  musicIndexChildren[playlistIndex].classList.remove("active");
  playlistIndex += num;

  // Ensure the index stays within bounds
  if (playlistIndex < 0) {
      playlistIndex = audioLinks.length - 1; // wrap around to the last audio
  } else if (playlistIndex >= audioLinks.length) {
      playlistIndex = 0; // wrap around to the first audio
  }

  // Temporarily remove the animation class to re-trigger it
  musicThumbnail.classList.remove("music-thumbnail-animation");
  void musicThumbnail.offsetWidth; // Trigger reflow
  musicThumbnail.classList.add("music-thumbnail-animation");

  audioSource.src = audioLinks[playlistIndex];
  audio.load(); // reload the audio element to apply the new source
  audio.play(); // play the new audio
  musicTitle.textContent = audioTitles[playlistIndex];
  musicThumbnail.style.backgroundImage = `url(${audioThumbnails[playlistIndex]})`;
  musicIndexChildren[playlistIndex].classList.add("active");
  musicBackground.style.backgroundColor = audioBackgroundColour[playlistIndex];
  musicBackground.style.boxShadow = audioBackgroundShadow[playlistIndex];
}


let colourIndex = 0;
const wotageiColourSpan = document.querySelectorAll("#wotageiSettings span");
const wotageiArea = document.querySelector("#wotageiArea");
const circles = document.querySelectorAll(".glow");
const coords = { x: 0, y: 0};
const colours = [
    [ //red
    '#ff6666',
    '#f86160',
    '#f15c5b',
    '#ea5755',
    '#e45350',
    '#dd4e4a',
    '#d64945',
    '#cf443f',
    '#c93f3a',
    '#c23a35',
    '#bb3530',
    '#b4312b',
    '#ae2c26',
    '#a72621',
    '#a1211c',
    '#9a1c17',
    '#931612',
    '#8d0f0d',
    '#860707',
    '#800000'
],
[ // orange
    '#ffc966',
'#ffc661',
'#ffc25c',
'#ffbf57',
'#febb52',
'#feb84d',
'#feb448',
'#feb043',
'#fead3f',
'#fea93a',
'#fea535',
'#fea130',
'#fe9e2b',
'#fe9a26',
'#fe9621',
'#ff911c',
'#ff8d16',
'#ff890f',
'#ff8507',
'#ff8000'
    ],
    [ //yellow
    '#ffff66',
    '#fffb61',
    '#fff85d',
    '#fff458',
    '#fff153',
    '#ffed4e',
    '#ffe94a',
    '#ffe645',
    '#ffe240',
    '#ffde3c',
    '#ffdb37',
    '#ffd732',
    '#ffd32d',
    '#ffcf28',
    '#ffcb23',
    '#ffc81e',
    '#ffc418',
    '#ffc011',
    '#ffbc09',
    '#ffb800'
    ],
    [//green
    '#66ff66',
    '#6cff62',
    '#72ff5f',
    '#78ff5b',
    '#7eff57',
    '#84ff53',
    '#89ff4f',
    '#8fff4b',
    '#94ff47',
    '#99ff43',
    '#9fff3f',
    '#a4ff3a',
    '#a9ff35',
    '#aeff30',
    '#b3ff2b',
    '#b8ff26',
    '#bdff1f',
    '#c2ff18',
    '#c7ff0e',
    '#ccff00'
    ],
    [//cyan
        '#66ffde',
    '#50fae1',
    '#32f5e4',
    '#00f0e8',
    '#00eaec',
    '#00e5f0',
    '#00def1',
    '#00d7f2',
    '#00d1f3',
    '#00caf4',
    '#00c4f4',
    '#00bef4',
    '#00b7f4',
    '#00b1f4',
    '#00abf5',
    '#00a4f7',
    '#009ef9',
    '#0096fe',
    '#008dff',
    '#0085ff'
    ],
    [//blue
        '#3347ff',
    '#3143f6',
    '#2f40ec',
    '#2c3ce3',
    '#2a39da',
    '#2735d1',
    '#2532c8',
    '#222ebf',
    '#202bb6',
    '#1d28ad',
    '#1a24a5',
    '#17219c',
    '#141e94',
    '#111b8b',
    '#0e1883',
    '#0b157b',
    '#081273',
    '#050f6b',
    '#020c63',
    '#00095b'
    ],
    [//purple
    '#6666ff',
    '#6561fa',
    '#645df4',
    '#6358ef',
    '#6254e9',
    '#614fe4',
    '#604bde',
    '#5f46d9',
    '#5d41d3',
    '#5c3dce',
    '#5b38c8',
    '#5933c3',
    '#582ebe',
    '#5629b8',
    '#5524b3',
    '#531ead',
    '#5118a8',
    '#5012a3',
    '#4e099d',
    '#4c0098'
    ],
    [//pink
        '#ff66ff',
    '#fe62f9',
    '#fd5ef3',
    '#fc59ed',
    '#fa55e7',
    '#f951e1',
    '#f74ddb',
    '#f548d5',
    '#f444cf',
    '#f23fc9',
    '#f03bc3',
    '#ee36be',
    '#ec31b8',
    '#ea2cb2',
    '#e727ad',
    '#e522a7',
    '#e31ca1',
    '#e0149c',
    '#de0b96',
    '#db0091'
    ]
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colours[colourIndex][index % 20];
    circle.style.boxShadow = "0 0 2px 3px " + colours[colourIndex][index % 20];
    console.log(circle.style.backgroundColor);
    console.log(circle.style.boxShadow);
});


function changeColour(num) {
    colourIndex = num;
    console.log(colourIndex);
    circles.forEach(function (circle, index) {
        circle.style.backgroundColor = colours[colourIndex][index % 20];
        circle.style.boxShadow = "0 0 2px 3px " + colours[colourIndex][index % 20];
    });
}

for (let i = 0; i < wotageiColourSpan.length; i++) {
    wotageiColourSpan[i].addEventListener("click", () => changeColour(i));
};


wotageiArea.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY + scrollY;
});

function animateCircles(dt) {
    let x = coords.x;
    let y = coords.y;
  
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length;
  
      circle.x = x;
      circle.y = y;
        
      // delay circles
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.6;
      y += (nextCircle.y - y) * 0.6;
    });
  
    requestAnimationFrame(animateCircles);
  }
  
  //animateCircles();
  requestAnimationFrame(animateCircles);


