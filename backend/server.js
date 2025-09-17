const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// DB Config - Replace with your MongoDB connection string
const dbURI = 'mongodb://localhost:27017/civicvoice';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// API Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/reports', require('./routes/reports'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));