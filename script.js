function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const hearts = ['❤️','💖','💕','💗','💘','💝'];
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 6 + 8) + 's';
  heart.style.opacity = Math.random() * 0.6 + 0.4;
  
  document.querySelector('.hearts').appendChild(heart);
  
  setTimeout(() => heart.remove(), 16000);
}

// Start floating hearts
setInterval(createHeart, 300);

// Click effect
document.addEventListener('click', (e) => {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.position = 'fixed';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  heart.style.fontSize = '45px';
  heart.style.transition = 'all 0.8s';
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.style.transform = 'scale(3)';
    heart.style.opacity = '0';
  }, 10);
  
  setTimeout(() => heart.remove(), 800);
});
