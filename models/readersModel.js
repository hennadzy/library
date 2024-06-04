const db = require('./db');

const getAllReaders = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Читатели', (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
};

const getReaderById = (id) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Читатели WHERE КодЧитателя = ?', id, (error, row) => {
      if (error) {
        reject(error);
      } else {
        resolve(row);
      }
    });
  });
}

const createReader = (reader) => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO Читатели (ФИО, Паспорт, Адрес, Телефон) VALUES (?, ?, ?, ?)', reader.ФИО, reader.Паспорт, reader.Адрес, reader.Телефон, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Читатель создан успешно' });
      }
    });
  });
};

const updateReader = (id, reader) => {
  return new Promise((resolve, reject) => {
    db.run('UPDATE Читатели SET ФИО = ?, Паспорт = ?, Адрес = ?, Телефон = ? WHERE КодЧитателя = ?', reader.ФИО, reader.Паспорт, reader.Адрес, reader.Телефон, id, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Читатель обновлен успешно' });
      }
    });
  });
};

const deleteReader = (id) => {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM Читатели WHERE КодЧитателя = ?', id, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ message: 'Читатель удален успешно' });
      }
    });
  });
};

class Reader {
  constructor(id, fullName, passport, address, phoneNumber) {
    this.id = id;
    this.fullName = fullName;
    this.passport = passport;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}

module.exports = { getAllReaders, getReaderById, createReader, updateReader, deleteReader, Reader };