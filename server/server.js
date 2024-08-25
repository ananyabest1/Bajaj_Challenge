
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// const userId = 'john_doe_17091999';
// const email = 'john@xyz.com';
// const rollNumber = 'ABCD123';

// app.post('/bfhl', (req, res) => {
//   const data = req.body.data;
//   const numbers = [];
//   const alphabets = [];
//   let highestLowercaseAlphabet = [];

//   data.forEach((item) => {
//     if (!isNaN(item)) {
//       numbers.push(item);
//     } else if (item.match(/[a-z]/i)) {
//       alphabets.push(item);
//       if (item.toLowerCase() === item) {
//         highestLowercaseAlphabet = [item];
//       }
//     }
//   });

//   res.json({
//     is_success: true,
//     user_id: userId,
//     email,
//     roll_number: rollNumber,
//     numbers,
//     alphabets,
//     highest_lowercase_alphabet: highestLowercaseAlphabet,
//   });
// });

// app.get('/bfhl', (req, res) => {
//   res.json({ operation_code: 1 });
// });

// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const alphabets = [];
  const numbers = [];
  const highestLowercaseAlphabet = '';

  for (const key in data) {
    if (typeof data[key] === 'string') {
      alphabets.push(data[key]);
    } else if (typeof data[key] === 'number') {
      numbers.push(data[key]);
    }
  }

  alphabets.sort((a, b) => a.localeCompare(b));
  highestLowercaseAlphabet = alphabets[alphabets.length - 1];

  res.json({
    alphabets,
    numbers,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});