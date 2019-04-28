const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Testimony = require('./models/Testimony');
const path = require('path');
const app = express();

mongoose.connect('mongodb+srv://rayane:rayane1998@portfolio0-1cdhc.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
});

app.use(bodyParser.json());


// app.get('/', (req, res) => {
//   res.send('welcome to my portfolio\'s server');
// });
// app.get('/api/test', (req, res) => {
//   console.log(mongoose.connection.readyState);
//   res.send('hi testify please');
// });

app.get('/api/testimonies', (req, res) => {
  Testimony.find()
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

app.post('/api/testimony', (req, res) => {
  const testimony = new Testimony({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    testimony: req.body.testimony
  });
  testimony
    .save()
    .then(result => {
      console.log(testimony, '\n done testifying');
      res.status(201).json({
        message: 'handling post req',
        createdtestimonial: testimony
      });
    })
    .catch(err => console.log(err));
});

app.delete('/api/testimonies/:id', (req, res) => {
  const id = req.params.id;
  Testimony.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// if(process.env.NODE_ENV === "production"){
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }


const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port}`);
