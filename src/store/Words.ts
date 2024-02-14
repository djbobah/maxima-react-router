import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/index.ts";

interface IWordsState {
  words: string[];
}

const initialState: IWordsState = {
  words: [
    "Функция",
    "Переменная",
    "Массив",
    "Объект",
    "Класс",
    "Метод",
    "Параметр",
    "Аргумент",
    "Интерфейс",
    "Событие",
    "Промис",
    "Асинхронность",
    "Итерация",
    "Условие",
    "Цикл",
    "Рекурсия",
    "Библиотека",
    "Фреймворк",
    "Пакет",
    "Модуль",
    "Компонент",
    "API",
    "Роутинг",
    "Декоратор",
    "Шаблон",
    "Контейнер",
    "Сериализация",
    "Десериализация",
    "Отладка",
    "Тестирование",
  ],
};
const WordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    deleteWord(state, action) {
      state.words = state.words.filter((word) => word !== action.payload);
    },
    editWord(state, action) {
      const ind = state.words.findIndex((el) => el === action.payload.word);
      state.words[ind] = action.payload.newWord;
    },
    addWord(state, action) {
      state.words.push(action.payload);
    },
  },
});

export const { deleteWord, editWord, addWord } = WordsSlice.actions;

export const selectCount = (state: RootState) => state.words;
export default WordsSlice.reducer;
