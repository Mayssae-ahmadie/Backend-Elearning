require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
require('./config/db');
const assessmentRoutes = require('./routes/assessmentRoute');
const userAssessmentRoutes = require('routes/userAssessmentRoute');

app.use(bodyParser.json());
app.use('/assessment', assessmentRoutes);
app.use('/userAssessment', userAssessmentRoutes),
    app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});