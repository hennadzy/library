const express = require('express');
const readersRoutes = require('./routes/readersRoutes');
const booksRoutes = require('./routes/booksRoutes');
const copiesRoutes = require('./routes/copiesRoutes');
const issuesRoutes = require('./routes/issuesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/readers', readersRoutes);
app.use('/books', booksRoutes);
app.use('/copies', copiesRoutes);
app.use('/issues', issuesRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});










