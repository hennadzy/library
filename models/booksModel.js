const db = require('./db');

const getAllBooks = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Книги', (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
};

const getBookById = (id) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Книги WHERE КодКниги = ?', id, (error, row) => {
      if (error) {
        reject(error);
      } else {
        resolve(row);
      }
    });
  });
}

const createBook = (book) => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO Книги (Автор, Название, Жанр, ГодИздания, Издательство) VALUES (?, ?, ?, ?, ?)', book.Автор, book.Название, book.Жанр, book.ГодИздания, book.Издательство, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Книга создана успешно' });
      }
    });
  });
};

const updateBook = (id, book) => {
  return new Promise((resolve, reject) => {
    db.run('UPDATE Книги SET Автор = ?, Название = ?, Жанр = ?, ГодИздания = ?, Издательство = ? WHERE КодКниги = ?', book.Автор, book.Название, book.Жанр, book.ГодИздания, book.Издательство, id, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Книга обновлена успешно' });
      }
    });
  });
};

const deleteBook = (id) => {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM Книги WHERE КодКниги = ?', id, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Книга удалена успешно' });
      }
    });
  });
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };