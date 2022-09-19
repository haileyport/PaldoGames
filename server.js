const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
// cors 를 허용
app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

app.get('/games/wordrelay', async (req, res) => {
  const { searchQuery } = req.query;
  const API_KEY = 'F34A53B349081AE8ECC0FF288D65F014';
  const URL = `https://opendict.korean.go.kr/api/search?key=${API_KEY}`;

  console.log(searchQuery);

  try {
    const {
      data: { item: result },
    } = await axios.get(URL);

    if (result) res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3020, () => {
  console.log('Listening on port 3020...');
});
