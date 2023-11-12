

profileEditButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupNewPlace);


initialCards.forEach(function (item) {
    const newCard = createCard(item, deleteCard,cardLike, openPopupCardImage);
    addCard(newCard);
  });




import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard,addCard,  deleteCard, cardLike} from './scripts/createCard.js';
import { openPopupCardImage, openPopupProfile, openPopupNewPlace, profileAddButton, profileEditButton} from './scripts/modal';
