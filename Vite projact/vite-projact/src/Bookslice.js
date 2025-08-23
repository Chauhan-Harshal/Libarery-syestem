import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: '1', title: '1984', author: 'George Orwell', available: true },
    { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', available: true },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.books.push(action.payload);
      },
      prepare(title, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            author,
            available: true,
          },
        };
      },
    },
    deleteBook(state, action) {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    toggleAvailability(state, action) {
      const book = state.books.find(book => book.id === action.payload);
      if (book) {
        book.available = !book.available;
      }
    },
  },
});

export const { addBook, deleteBook, toggleAvailability } = booksSlice.actions;
export default booksSlice.reducer;
