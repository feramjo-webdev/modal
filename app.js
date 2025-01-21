// select relevant elements
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlayElement = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', function () {
  modalOverlayElement.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
  modalOverlayElement.classList.remove('open-modal');
});
