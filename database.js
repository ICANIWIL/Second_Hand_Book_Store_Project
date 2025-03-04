require('dotenv').config(); // Load .env variables
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,      // Use new URL parser
  useUnifiedTopology: true,   // Use new Server Discover and Monitoring engine
})
.then(() => console.log('MongoDB connected successfully!'))
.catch((err) => console.error('MongoDB connection error:', err));

// Export the connection (optional)
module.exports = mongoose.connection;
