const introVideo = document.getElementById('intro-video');
const animation = document.getElementById('animation');
introVideo.addEventListener('ended', () => {
  animation.classList.add('fade-out');
  setTimeout(() => {
    animation.style.display = 'none';
  }, 800); // 2秒後にアニメーションを非表示にする
});