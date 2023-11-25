const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(bodyParser.json());


// Use middleware
app.use(express.json());

// Use user routes
app.use('/api/user', userRoutes);


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/reset_password', {  useNewUrlParser: true,  useUnifiedTopology: true})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));