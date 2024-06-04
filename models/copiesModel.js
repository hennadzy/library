const db = require('./db');

const getAllCopies = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Экземпляр', (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
};

const getCopyById = (id) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Экземпляр WHERE КодЭкземпляра = ?', id, (error, row) => {
      if (error) {
        reject(error);
      } else {
        resolve(row);
      }
    });
  });
}

const createCopy = (copy) => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO Экземпляр (КодКниги, Местонахождение) VALUES (?, ?)', copy.КодКниги, copy.Местонахождение, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Экземпляр книги создан успешно' });
      }
    });
  });
};

const updateCopy = (id, copy) => {
  return new Promise((resolve, reject) => {
    db.run('UPDATE Экземпляр SET КодКниги = ?, Местонахождение = ? WHERE КодЭкземпляра = ?', copy.КодКниги, copy.Местонахождение, id, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Экземпляр книги обновлен успешно' });
      }
    });
  });
};

const deleteCopy = (id) => {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM Экземпляр WHERE КодЭкземпляра = ?', id, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Экземпляр книги удален успешно' });
      }
    });
  });
};

// const getCopiesByBookId = (bookId) => {
//   return new Promise((resolve, reject) => {
//     db.all('SELECT * FROM Экземпляр WHERE КодКниги = ?', bookId, (error, row) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(row);
//       }
//     });
//   });
// }

const getCopiesByBookId = (bookId) => {
  return new Promise((resolve, reject) => {
    db.all(`
SELECT Экземпляр.*, Книги.Название, Книги.Автор
FROM Экземпляр
INNER JOIN Книги ON Экземпляр.КодКниги = Книги.КодКниги
WHERE Экземпляр.КодКниги = ?
`, bookId, (error, row) => {
      if (error) {
        reject(error);
      } else {
        resolve(row);
      }
    });
  });
}



module.exports = { getAllCopies, getCopyById, createCopy, updateCopy, deleteCopy, getCopiesByBookId };