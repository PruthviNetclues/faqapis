const express = require('express');
const bodyParser = require('body-parser');
const faqRoutes = require('./routes/faqRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/faqs', faqRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});