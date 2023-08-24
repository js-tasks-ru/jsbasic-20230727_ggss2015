const hideButton = document.querySelector('.hide-self-button');
function hideSelf() {
  hideButton.addEventListener('click', () => {
    hideButton.hidden = true;
  });
}