
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');


// @todo: DOM узлы



// @todo: Функция создания карточки

function createCard(item, deleteCard) {
    
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    
    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__image').alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    
    deleteButton.addEventListener('click', deleteCard);

    return cardElement;
}

function addCard(item) {
   placesList.append(item);
}


// @todo: Функция удаления карточки
    
function deleteCard(del) {
    const cardDelete = del.target.closest('.places__item');
    cardDelete.remove();
}
  

// @todo: Вывести карточки на страницу

initialCards.forEach(function (item) {
    const openCard = createCard(item, deleteCard);
    addCard(openCard);
});

