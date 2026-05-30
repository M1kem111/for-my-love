// ===== HEART ANIMATION =====
const container = document.getElementById("heart-container");
const letterModal = document.getElementById("letter-modal");

// Сразу скрываем письмо при загрузке
letterModal.classList.add("hidden");

// Создаем точки для сердца
const points = [];
for (let t = 0; t < Math.PI * 2; t += 0.15) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    points.push({ x, y });
}

// Создаем слова "I LOVE YOU"
points.forEach(point => {
    const el = document.createElement("div");
    el.className = "love";
    el.innerText = "I LOVE YOU";

    // Случайная стартовая позиция
    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.top = Math.random() * window.innerHeight + "px";

    container.appendChild(el);

    // Клик по слову открывает письмо
    el.addEventListener("click", () => {
        letterModal.classList.remove("hidden");
    });

    // Анимация к сердцу
    setTimeout(() => {
        el.style.left = window.innerWidth / 2 + point.x * 18 + "px";
        el.style.top = window.innerHeight / 2 - point.y * 18 + "px";
    }, 500);
});

// ===== TIMER =====
const timerEl = document.getElementById("timer");
const startDate = new Date("2025-08-19"); // <-- Ваша дата начала отношений

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    timerEl.innerHTML = `❤️ Мы вместе уже <b>${days}</b> дней ❤️`;
}
updateTimer();
setInterval(updateTimer, 1000 * 60 * 60);

// ===== MUSIC =====
const music = document.getElementById("music");
document.getElementById("playBtn").addEventListener("click", () => {
    music.play();
});

// ===== LETTER MODAL =====
// Открытие по фото
document.getElementById("photo").addEventListener("click", () => {
    letterModal.classList.remove("hidden");
});

// Закрытие по крестику
document.getElementById("close-letter").addEventListener("click", () => {
    letterModal.classList.add("hidden");
});

// Закрытие по клику на фон (не на письмо)
letterModal.addEventListener("click", (e) => {
    if (e.target === letterModal) {
        letterModal.classList.add("hidden");
    }
});

// ===== STARS EFFECT =====
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 200; i++) {
    stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 2 });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();

// ===== FINAL TEXT =====
setTimeout(() => {
    const text = document.createElement("div");
    text.innerHTML = "✨ И это только начало нашей истории... ❤️";
    text.style.position = "fixed";
    text.style.bottom = "30px";
    text.style.width = "100%";
    text.style.textAlign = "center";
    text.style.fontSize = "24px";
    document.body.appendChild(text);
}, 6000);