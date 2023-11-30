function toggleText() {
  const hideButton = document.querySelector('.toggle-text-button');
  const hideText = document.getElementById('text');
hideButton.addEventListener('click', () => {
  hideText.hidden = !hideText.hidden;
})
}