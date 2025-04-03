const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth.route');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


app.use('/auth', authRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port} `));
