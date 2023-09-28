const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));
const contactRoutes = require('./src/routes/contactRoutes');
// const registrasiRoutes = require('./src/routes/registrasiRoutes');
// const newsletterRoutes = require('./src/routes/newsletterRoutes');
// const courseRoutes = require('./src/routes/courseRoutes');

app.use(express.json())
app.use('/api', contactRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
});