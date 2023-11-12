import { cardLike, createCard, deleteCard } from './createCard';

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popup = document.querySelectorAll('.popup');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputDescription = document.querySelector(
  '.popup__input_type_description'
);
const buttonClosePopupEdit = document.querySelectorAll('.popup__close');

//плавное открытие попапов
export const openModal = (evt) => {
  evt.classList.add('popup_is-animated');
  setTimeout(() => {
    evt.classList.add('popup_is-opened');
  }, 100);

  document.addEventListener('keydown', closePopupByEsc);
};

//popap Image

export const openPopupCardImage = (evt) => {
  openModal(popupTypeImage);

  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
};

//form profile

function openPopupProfile() {
  openModal(popupTypeEdit);
  popupInputName.setAttribute('value', profileTitle.textContent);
  popupInputDescription.setAttribute('value', profileDescription.textContent);
}

const formElementEditProfile = document.querySelector(
  'form[name="edit-profile"]'
);

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  const popupName = popupInputName.value;
  const popupJob = popupInputDescription.value;

  const profileTitle = document.querySelector('.profile__title');
  const profileDescription = document.querySelector('.profile__description');

  profileTitle.textContent = popupName;
  profileDescription.textContent = popupJob;

  popupInputName.value = '';
  popupInputDescription.value = '';

  closeModal(popupTypeEdit);
}

formElementEditProfile.addEventListener('submit', handleEditFormSubmit);

//form New Image
function openPopupNewPlace(evt) {
  evt.preventDefault();
  openModal(popupNewCard);
}

const formElementImage = document.querySelector('form[name="new-place"]');

const cardNameInput = formElementImage.querySelector(
  '.popup__input_type_card-name'
);
const cardUrlInput = formElementImage.querySelector('.popup__input_type_url');
const placesList = document.querySelector('.places__list');

export function handleFormSubmitImage(evt) {
  evt.preventDefault();
  const newCardName = cardNameInput.value;
  const newCardUrl = cardUrlInput.value;

  const cardCard = {
    name: newCardName,
    link: newCardUrl,
  };

  cardNameInput.value = '';
  cardUrlInput.value = '';

  const newCard = createCard(
    cardCard,
    deleteCard,
    cardLike,
    openPopupCardImage
  );
  placesList.prepend(newCard);

  closeModal(popupNewCard);
}
formElementImage.addEventListener('submit', handleFormSubmitImage);

//функция закрытия попапа
export const closeModal = (popup) => {
  popup.classList.remove('popup_is-opened');

  document.removeEventListener('keydown', closePopupByEsc);
};

//закрытие по клавише Esc
const closePopupByEsc = function (evt) {
  if (evt.code === 'Escape') {
    closeModal(document.querySelector('.popup_is-opened'));
  }
};

//закрытие по нажатию мышкой на облать вне картинки
popup.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal(item);
    }
  });
});

//закрытие модального окна по клику на крестик
buttonClosePopupEdit.forEach((item) => {
  item.addEventListener('click', (evt) => {
    closeModal(evt.target.closest('.popup'));
  });
});

export {
  popupTypeEdit,
  profileEditButton,
  profileAddButton,
  profileTitle,
  profileDescription,
  popupInputName,
  popupInputDescription,
  openPopupProfile,
  openPopupNewPlace,
};
