// ===== дата начала отношений =====
const startDate = new Date("2025-08-19"); // поменяешь

function updateCounter() {
  const now = new Date();
  const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerText =
    `Мы вместе: ${diff} дней`;
}

updateCounter();
setInterval(updateCounter, 60000);

// ===== элементы =====
const heart = document.getElementById("heart");
const photo = document.getElementById("photo");
const letter = document.getElementById("letter");
const music = document.getElementById("music");
const btn = document.getElementById("btn");

// ===== появление фото =====
setTimeout(() => {
  photo.style.opacity = 1;
  photo.style.transform = "scale(1)";
}, 2500);

// ===== сердце → открыть письмо =====
heart.onclick = () => {
  letter.style.display = "flex";
};

// ===== фото тоже открывает письмо =====
photo.onclick = () => {
  letter.style.display = "flex";
};

// ===== закрытие письма =====
letter.onclick = () => {
  letter.style.display = "none";
};

// ===== музыка =====
let playing = false;

btn.onclick = () => {
  if (!playing) {
    music.play();
    btn.innerText = "Пауза";
  } else {
    music.pause();
    btn.innerText = "Наша песня 🎵";
  }
  playing = !playing;
};
