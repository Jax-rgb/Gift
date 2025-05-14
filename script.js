// Falling Hearts
const canvas = document.getElementById('hearts-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let hearts = [];

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: Math.random() * 10 + 10,
    speedY: Math.random() * 1 + 0.5,
    driftX: (Math.random() - 0.5) * 0.5,
    color: `hsl(280, 80%, ${Math.floor(Math.random() * 20 + 75)}%)`,
    alpha: Math.random() * 0.4 + 0.4
  };
}

function drawHeart(x, y, size, color, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  ctx.fill();
  ctx.restore();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (hearts.length < 50) hearts.push(createHeart());

  hearts.forEach((heart, index) => {
    heart.y += heart.speedY;
    heart.x += heart.driftX;
    drawHeart(heart.x, heart.y, heart.size, heart.color, heart.alpha);

    if (heart.y > canvas.height + 20) hearts.splice(index, 1);
  });

  requestAnimationFrame(update);
}

update();

// Typewriter Message
const text = `You are everything that I wished for. Thank you for just simply existing. I appreciate your presence in my life and the joy you bring, you make my world complete, and I’m grateful for you. I love you so much, langga.\n\nHappy 3rd Monthsary 💜`;

const showBtn = document.getElementById('showMessage');
const messageEl = document.getElementById('message');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    messageEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

showBtn.addEventListener('click', () => {
  messageEl.style.display = 'block';
  showBtn.style.display = 'none';
  typeWriter();
});
