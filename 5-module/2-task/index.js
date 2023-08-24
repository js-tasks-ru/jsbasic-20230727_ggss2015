function toggleText() {
  const hideButton = document.querySelector('.toggle-text-button');
  const hideText = document.getElementById('text');
  let visibleText = true;
hideButton.addEventListener('click', () => {
  if (visibleText) {
    hideText.style.display = 'none';
  } else {
    hideText.style.display = 'block';
  }
    visibleText = !visibleText;
})
};