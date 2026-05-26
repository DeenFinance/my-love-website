function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = ['❤️','💖','💕','💗','💘','💝'][Math.floor(Math.random()*6)];
  
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random()*6 + 8) + 's';
  heart.style.opacity = Math.random() * 0.6 + 0.5;
  
  document.querySelector('.hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 16000);
}

setInterval(createHeart, 280);

document.addEventListener('click', (e) => {
  for(let i = 0; i < 6; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.textContent = '💖';
      h.style.position = 'fixed';
      h.style.left = e.clientX + 'px';
      h.style.top = e.clientY + 'px';
      h.style.fontSize = '40px';
      h.style.transition = '1s';
      document.body.appendChild(h);
      h.style.transform = 'scale(3)';
      h.style.opacity = '0';
      setTimeout(() => h.remove(), 1000);
    }, i*50);
  }
});
