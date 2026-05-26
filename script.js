function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  const emojis = ['🥰','😘','😍','❤️','💖','💕','💗','💘','💝','💞'];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 7 + 9) + 's';
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  heart.style.fontSize = (Math.random() * 1.2 + 2.1) + 'rem';
  
  document.querySelector('.hearts').appendChild(heart);
  
  setTimeout(() => heart.remove(), 18000);
}

// More beautiful floating hearts
setInterval(createHeart, 250);

// Click to create explosion of hearts
document.addEventListener('click', (e) => {
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.textContent = '💖';
      heart.style.position = 'fixed';
      heart.style.left = (e.clientX + (Math.random() * 60 - 30)) + 'px';
      heart.style.top = (e.clientY + (Math.random() * 60 - 30)) + 'px';
      heart.style.fontSize = '38px';
      heart.style.transition = 'all 1.2s ease-out';
      heart.style.zIndex = '100';
      document.body.appendChild(heart);

      const angle = Math.random() * 360;
      heart.style.transform = `translate(${Math.cos(angle) * 80}px, ${Math.sin(angle) * 80}px) scale(2.5)`;
      heart.style.opacity = '0';
      
      setTimeout(() => heart.remove(), 1200);
    }, i * 40);
  }
});
