const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const FacultyModel = require('./Models/Faculty')

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.get('/getFaculties', async(req,res)=>{
    // FacultyModel.find()
    // .then(faculties => res.json(faculties))
    // .catch(err => res.json(err))
    try {
        const faculties = await FacultyModel.find();
        res.status(200).json({ success: true, data: faculties });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to fetch faculties', error: err.message });
    }
})

//////////////////////////////////////////////
