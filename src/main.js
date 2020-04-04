import {getMenuMarkup} from "./components/menu.js";
import {getFiltersMarkup} from "./components/filters.js";
import {getBoardMarkup} from "./components/board.js";
import {getFormMarkup} from "./components/form.js";
import {getCardMarkup} from "./components/card.js";
import {getButtonMarkup} from "./components/button.js";

const CARDS_NUM = 3;

const mainElement = document.querySelector(`.main`);
const mainControlElement = mainElement.querySelector(`.main__control`);
const mainFilterElement = mainElement.querySelector(`.main__filter`);

const renderMarkup = (container, markup, position = `beforeend`) => {
  container.insertAdjacentHTML(position, markup);
};


renderMarkup(mainControlElement, getMenuMarkup());
renderMarkup(mainFilterElement, getFiltersMarkup());
renderMarkup(mainElement, getBoardMarkup());

const boardElement = mainElement.querySelector(`.board`);
const boardTasksElement = boardElement.querySelector(`.board__tasks`);

renderMarkup(boardTasksElement, getFormMarkup());

for (let i = 0; i < CARDS_NUM; i++) {
  renderMarkup(boardTasksElement, getCardMarkup());
}

renderMarkup(boardElement, getButtonMarkup());
