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


