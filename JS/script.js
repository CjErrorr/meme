function goToScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');

  // Reset the "No" button position when entering screen 3.
  if (screenId === 'screen-3') {
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = '';
    noBtn.style.left = '';
    noBtn.style.top = '';
  }
}

function dodgeNo() {
  const noBtn = document.getElementById('no-btn');
  const card = document.querySelector('.card');
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 40;
  const maxY = cardRect.height - btnRect.height - 40;
  const randomX = Math.floor(Math.random() * maxX) - (maxX / 2);
  const randomY = Math.floor(Math.random() * maxY) - (maxY / 2);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `calc(50% + ${randomX}px)`;
  noBtn.style.top = `calc(50% + ${randomY}px)`;
}
