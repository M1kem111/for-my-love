// ===== дата начала =====
const startDate = new Date("2025-08-19");

function updateCounter() {
  const now = new Date();
  const diff = Math.floor((now - startDate) / (1000*60*60*24));
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
const letterContent = document.querySelector(".letter-content p");

// ===== фото появление =====
setTimeout(() => {
  photo.style.opacity = 1;
  photo.style.transform = "scale(1)";
}, 2500);

// ===== письмо =====
heart.onclick = () => showLetter();
photo.onclick = () => showLetter();
letter.onclick = () => hideLetter();

function showLetter() {
  letter.style.display = "flex";
  typeLetter();
}

function hideLetter() {
  letter.style.display = "none";
  letterContent.innerHTML = "";
  heart.classList.remove("active");
}

// ===== текст письма =====
const fullText = `Любимая,

Каждый день рядом с тобой делает меня счастливее.
Ты самое прекрасное, что произошло в моей жизни.

Ты большая умничка, и я верю в тебя, что всё у тебя получится в такое непростое для нас и в особенности для тебя время.

Что бы ни происходило, я всегда буду рядом, поддерживать тебя и радоваться каждому твоему успеху.

Я очень сильно тебя люблю ❤️`;

// ===== печать письма =====
function typeLetter() {
  letterContent.innerHTML = "";
  let i = 0;

  const speed = 30;

  const interval = setInterval(() => {
    letterContent.innerHTML += fullText.charAt(i);
    i++;

    if (i >= fullText.length) {
      clearInterval(interval);
      activateFinalEmotion();
    }
  }, speed);
}

// ===== финальный эффект =====
function activateFinalEmotion() {
  heart.classList.add("active");

  photo.style.transform = "scale(1.05)";
  document.body.style.background =
    "radial-gradient(circle at center, rgba(255,60,100,0.15), #000000)";
}

// ===== музыка =====
let playing = false;

btn.onclick = async () => {
  if (!playing) {
    music.volume = 0;
    await music.play();

    let v = 0;
    const fade = setInterval(() => {
      if (v < 1) {
        v += 0.05;
        music.volume = v;
      } else {
        clearInterval(fade);
      }
    }, 100);

    btn.innerText = "Пауза";
  } else {
    music.pause();
    btn.innerText = "Наша песня 🎵";
  }

  playing = !playing;
};
