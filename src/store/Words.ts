import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

export const {} = WordsSlice.actions;

export default WordsSlice.reducer;
