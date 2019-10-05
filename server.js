import express from 'express';

// Initialize express application
const app = express();

// API endpoints
app.get('/', (req, res) => res.send('http get sent to root api endpoint'));

// Connecttion Listener
app.listen(3000, () => console.log('Express server running on port 3000'));