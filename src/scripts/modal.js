import {
  cardLike,
  createCard,
  deleteCard,
  placesList,
} from './cards';
const closePopup = document.querySelector('.popup__close');

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
const popupInputDescription = document.querySelector('.popup__input_type_description');


//плавное открытие попапов
const popupAnimatedOpen = (evt) => {
    evt.classList.add('popup_is-animated');
    setTimeout(()=> {
        evt.classList.add('popup_is-opened');
    }, 100);
};

//popap Image
export const popupCardImage = (evt) => {
  evt.preventDefault();
  popupAnimatedOpen(popupTypeImage);
  
  popupImage.src = evt.link;
  popupImage.alt = evt.name;
  popupCaption.textContent = evt.name;

};

const closeImage = popupTypeImage.querySelector('.popup__close');
closeImage.addEventListener('click', function () {
  popupTypeImage.classList.remove('popup_is-opened');
});

//form profile

function popapOpenProfile(evt) {
  evt.preventDefault();
  popupAnimatedOpen(popupTypeEdit);
  popupInputName.setAttribute('value', profileTitle.textContent);
  popupInputDescription.setAttribute('value', profileDescription.textContent);
}

const formElement = document.querySelector('form[name="edit-profile"]');
function handleFormSubmit(evt) {
  evt.preventDefault();
  const popupName = popupInputName.value;
  const popupJob = popupInputDescription.value;

  const profileTitle = document.querySelector('.profile__title');
  const profileDescription = document.querySelector('.profile__description');

  profileTitle.textContent = popupName;
  profileDescription.textContent = popupJob;

  popupInputName.value = '';
  popupInputDescription.value = '';

  closePopap(popupTypeEdit);
}

formElement.addEventListener('submit', handleFormSubmit);

//form New Image
function popupOpenNewPlace(evt) {
    evt.preventDefault();
    popupAnimatedOpen(popupNewCard);
  }

const formElementImage = document.querySelector('form[name="new-place"]');

const nameInput = formElementImage.querySelector('.popup__input_type_card-name');
const jobInput = formElementImage.querySelector('.popup__input_type_url');
function handleFormSubmitImage(evt) {
  evt.preventDefault();
  const popupImageName = nameInput.value;
  const popupImageJob = jobInput.value;

  const cardCard = {
    name: popupImageName,
    link: popupImageJob,
    alt: popupImageName,
  };

  nameInput.value = '';
  jobInput.value = '';

  const newCard = createCard(cardCard, deleteCard, cardLike, popupCardImage);
  placesList.prepend(newCard);

  closePopap(popupNewCard);
}
formElementImage.addEventListener('submit', handleFormSubmitImage);

const close = popupNewCard.querySelector('.popup__close');
close.addEventListener('click', function () {
  popupNewCard.classList.remove('popup_is-opened');
});

//функция закрытия попапа
const closePopap = (evt) => {
  evt.classList.remove('popup_is-opened');
};

const popupClose = function () {
  closePopap(popupTypeEdit);
};

//закрытие по клавише Esc
const popupCloseEsc = function (evt) {
  if (evt.code === 'Escape') {
    popupTypeImage.classList.remove('popup_is-opened');
    popupTypeEdit.classList.remove('popup_is-opened');
    popupNewCard.classList.remove('popup_is-opened');
  }
};

//закрытие по нажатию мышкой на облать вне картинки
popup.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopap(item);
    }
  });
});

profileEditButton.addEventListener('click', popapOpenProfile);
profileAddButton.addEventListener('click', popupOpenNewPlace);
closePopup.addEventListener('click', popupClose);
document.addEventListener('keydown', popupCloseEsc);

export {
  popupTypeEdit,
  profileEditButton,
  profileTitle,
  profileDescription,
  popupInputName,
  popupInputDescription,
  popapOpenProfile,
};
