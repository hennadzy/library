const db = require('./db');

const getAllIssues = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Выдача', (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
};

const getIssueById = (id) => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Выдача WHERE КодЧитателя = ?', id, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
};

const createIssue = (issue) => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO Выдача (КодЧитателя, КодЭкземпляра, ДатаВзятия, ДатаВозврата) VALUES (?, ?, ?, ?)', issue.КодЧитателя, issue.КодЭкземпляра, issue.ДатаВзятия, issue.ДатаВозврата, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Выдача создана успешно' });
      }
    });
  });
};

const updateIssue = (id, issue) => {
  return new Promise((resolve, reject) => {
    db.run('UPDATE Выдача SET КодЧитателя = ?, КодЭкземпляра = ?, ДатаВзятия = ?, ДатаВозврата = ? WHERE КодЧитателя = ?', issue.КодЧитателя, issue.КодЭкземпляра, issue.ДатаВзятия, issue.ДатаВозврата, id, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Выдача обновлена успешно' });
      }
    });
  });
};

const deleteIssue = (id) => {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM Выдача WHERE КодЧитателя = ?', id, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Выдача удалена успешно' });
      }
    });
  });
};

// const getBooksInIssuesByReaderId = (readerId) => {
//   return new Promise((resolve, reject) => {
//     db.all(`
//     SELECT Книги.*
//     FROM Книги
//     INNER JOIN Экземпляр ON Книги.КодКниги = Экземпляр.КодКниги
//     INNER JOIN Выдача ON Экземпляр.КодЭкземпляра = Выдача.КодЭкземпляра
//     WHERE Выдача.КодЧитателя = ?`, readerId, (error, rows) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(rows);
//       }
//     });
//   });
// };

const getBooksInIssuesByReaderId = (readerId) => {
  return new Promise((resolve, reject) => {
    db.all(`
    SELECT Книги.*, Выдача.ДатаВзятия, Выдача.ДатаВозврата
    FROM Книги
    INNER JOIN Экземпляр ON Книги.КодКниги = Экземпляр.КодКниги
    INNER JOIN Выдача ON Экземпляр.КодЭкземпляра = Выдача.КодЭкземпляра
    WHERE Выдача.КодЧитателя = ?
  `, readerId, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
};



module.exports = { getAllIssues, getIssueById, createIssue, updateIssue, deleteIssue, getBooksInIssuesByReaderId };