import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    count: 0,
    trush: [],
  },
  reducers: {
    addBasket: (state, action) => {
      const existingItem = state.basket.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Если элемент уже существует в корзине, увеличиваем его счетчик
        existingItem.count += 1;
      } else {
        // Если элемент не существует, добавляем его в корзину
        state.basket.push({ ...action.payload, count: 1 });
      }
    },
    countAdd: (state) => {
      state.count++;
    },
    removeTask: (state, action) => {
      // Найти индекс элемента, который нужно удалить, в массиве корзины (basket)
      const index = state.basket.findIndex(item => item.id === action.payload)
      // Проверить, был ли найден элемент
      if(index !== 1) {
        // Сохранить удаленный элемент в переменную
        const removedItem = state.basket[index]
        // Проверить, если количество элемента больше 1
        if(removedItem.count > 1) {
            // Если количество больше 1, уменьшить счетчик на 1
            removedItem.count -= 1
        } else {
          // Если количество равно 1, удалить элемент из массива корзины
          state.basket.splice(index, 1)
        }
        // Добавить удаленный элемент в массив "trush" (вероятно, мусор)
        state.trush.push(removedItem)
        // Уменьшить общий счетчик на 1
        state.count--;
      }
    },
  }
})


export const {addBasket,removeTask,countAdd} = basketSlice.actions
