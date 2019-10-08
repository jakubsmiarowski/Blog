const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const loadTestData = require('./testData');
const helmet = require('helmet');
const path = require('path');

const app = express();
const mongoSanitize = require('express-mongo-sanitize');

// import routes
const postRoutes = require('./routes/post.routes');

app.use(mongoSanitize());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', postRoutes);
app.use(helmet());
app.use(express.static(path.join(__dirname, '/../client/build')));

// connects our back end code with the database
mongoose.connect(process.env.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
    loadTestData();
});
db.on('error', (err) => console.log('Error ' + err));

app.listen(process.env.PORT, function() {
    console.log('Server is running on Port:', process.env.PORT);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});