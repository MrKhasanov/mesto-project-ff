
//плавное открытие попапов
export const openModal = (evt) => {
  evt.classList.add('popup_is-animated');
  setTimeout(() => {
    evt.classList.add('popup_is-opened');
  }, 100);

  document.addEventListener('keydown', closePopupByEsc);
};

//функция закрытия попапа
export let closeModal = (popup) => {
  popup.classList.remove('popup_is-opened');

  document.removeEventListener('keydown', closePopupByEsc);
};

//закрытие по клавише Esc
 let closePopupByEsc = function (evt) {
  if (evt.code === 'Escape') {
    closeModal(document.querySelector('.popup_is-opened'));
  }
};

//закрытие по нажатию мышкой на облать вне картинки
 export const closePopupByOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal(document.querySelector('.popup_is-opened'));
    }
  
};



