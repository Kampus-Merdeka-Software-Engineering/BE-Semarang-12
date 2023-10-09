const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const config = require('./src/config/registrasiConfig');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'src')));
const contactRoutes = require('./src/routes/contactRoutes');
const registrasiRoutes = require('./src/routes/registrasiRoutes');
const newsletterRoutes = require('./src/routes/newsletterRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
const courseRoutes = require('./src/routes/courseRoutes');

app.use(express.json())
app.use('/api', contactRoutes);
app.use('/api', registrasiRoutes);
app.use('/api', newsletterRoutes);
app.use('/api', loginRoutes);
app.use('/api', courseRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
    // console.log('ini login routes',loginRoutes);
    // console.log('ini newsletter', newsletterRoutes);
});