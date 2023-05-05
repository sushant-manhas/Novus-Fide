const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

const login = require('./routes/LoginRoute');
const getStarted = require('./routes/RegisterRoute');
const fundStartup = require('./routes/RegisterStartup');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/login', login);
app.use('/get-started', getStarted);
app.use('/fund-startup', fundStartup);

app.listen(PORT, () => {
  console.log('Server started on port'+PORT);
})

app.use('/', (req,res) => {
  res.send('Hello World');
})