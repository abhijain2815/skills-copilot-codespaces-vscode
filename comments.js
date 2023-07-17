// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const comments = require('./comments');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  const username = req.body.username;
  const newComment = comments.addComment(comment, username);
  res.json(newComment);
});

app.listen(8081, () => {
  console.log('Server listening on port 8081...');
});