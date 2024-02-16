function modelWindow() {
  const modalWindow = document.querySelector('.js-modal-window'); //Выбираем модальное окно

  if (modalWindow.classList.contains('modal-window-opacity')) { // Если в окне есть класс modal-window-opacity
    modalWindow.classList.remove('modal-window-opacity'); // то удаляем его
  } else {
    modalWindow.classList.add('modal-window-opacity'); // иначе добавляем
  }
}