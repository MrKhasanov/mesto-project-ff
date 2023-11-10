
// @todo: Темплейт карточки


// @todo: DOM узлы



// @todo: Функция создания карточки



// @todo: Вывести карточки на страницу

initialCards.forEach(function (item) {
    const newCard = createCard(item, deleteCard,cardLike, popupCardImage);
    addCard(newCard);
  });
  
  
import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, addCard, deleteCard, cardLike} from './scripts/cards';
import { popupCardImage} from './scripts/modal';
