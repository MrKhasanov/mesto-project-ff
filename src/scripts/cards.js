const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

export function createCard(item, deleteCard, cardLike, openPopupCardImage) {
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const cardImage = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = item.name;
  cardElement.querySelector('.card__title').textContent = item.name;

  deleteButton.addEventListener('click', deleteCard);

  cardImage.addEventListener('click', openPopupCardImage);

  likeButton.addEventListener('click', cardLike);
  
  return cardElement;
}

function addCard(item) {
  placesList.append(item);
}

// Функция для лайка карточки
export const cardLike = function (evt) {
  evt.target.classList.toggle('card__like-button_is-active');
};

// @todo: Функция удаления карточки

function deleteCard(event) {
  const cardDelete = event.target.closest('.places__item');
  cardDelete.remove();
}



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

export { initialCards };

export { deleteCard, addCard, cardTemplate, placesList };


