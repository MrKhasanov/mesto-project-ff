const placesList = document.querySelector('.places__list');
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

//popap Image

const openPopupCardImage = (evt) => {
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

function handleFormSubmitImage(evt) {
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

buttonClosePopupEdit.forEach((item) => {
  item.addEventListener('click', (evt) => {
    closeModal(evt.target.closest('.popup'));
  });
});

popup.forEach((item) => {
  item.addEventListener('click', closePopupByOverlay);
});

profileEditButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupNewPlace);

initialCards.forEach(function (item) {
  const newCard = createCard(item, deleteCard, cardLike, openPopupCardImage);
  addCard(newCard);
});

import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, addCard, deleteCard, cardLike } from './scripts/card.js';
import { openModal, closeModal, closePopupByOverlay } from './scripts/modal';
