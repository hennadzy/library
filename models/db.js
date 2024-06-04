const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./library.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS Читатели (КодЧитателя INTEGER PRIMARY KEY AUTOINCREMENT, ФИО TEXT, Паспорт TEXT, Адрес TEXT, Телефон TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS Книги (КодКниги INTEGER PRIMARY KEY AUTOINCREMENT, Автор TEXT, Название TEXT, Жанр TEXT, ГодИздания INTEGER, Издательство TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS Экземпляр (КодЭкземпляра INTEGER PRIMARY KEY AUTOINCREMENT, КодКниги INTEGER, Местонахождение TEXT, FOREIGN KEY (КодКниги) REFERENCES Книги(КодКниги))");
  db.run("CREATE TABLE IF NOT EXISTS Выдача (КодЧитателя INTEGER, КодЭкземпляра INTEGER, ДатаВзятия TEXT, ДатаВозврата TEXT, FOREIGN KEY (КодЧитателя) REFERENCES Читатели(КодЧитателя), FOREIGN KEY (КодЭкземпляра) REFERENCES Экземпляр(КодЭкземпляра))");
  console.log('Таблицы созданы успешно');
});

module.exports = db;

