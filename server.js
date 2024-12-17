// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const PORT = 5000;

// app.use(bodyParser.json()); 
// app.use(cors()); 

// mongoose.connect('mongodb://127.0.0.1:27017/formData', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB підключено'))
// .catch((err) => console.error('Помилка підключення до MongoDB:', err));

// const formDataSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     email: { type: String, required: true },
//     residence: { type: String, required: true },
//     channel: { type: String, required: true },
//     followers: { type: String, required: true },
//     ageCheck: { type: Boolean, required: true }
// });

// const FormData = mongoose.model('FormData', formDataSchema);

// app.get('/', (req, res) => {
//     res.send('Сервер працює');
// });

// // Отримання даних з бази
// app.get('/formdata', async (req, res) => {
//     try {
//         const data = await FormData.find(); // Отримуємо всі записи з колекції
//         res.status(200).json(data);  // Відправляємо дані у відповідь
//     } catch (error) {
//         console.error('Error retrieving data:', error);
//         res.status(500).json({ message: 'Server error while retrieving data' });
//     }
// });

// app.post('/submit', async (req, res) => {
//     console.log('Received form data:', req.body);  
//     try {
//         const newFormData = new FormData({
//             fullName: req.body.fullName,
//             email: req.body.email,
//             residence: req.body.residence,
//             channel: req.body.channel,
//             followers: req.body.followers,
//             ageCheck: req.body.ageCheck
//         });

//         await newFormData.save();
//         res.status(201).json({ message: 'Data successfully saved!' });
//     } catch (error) {
//         console.error('Error saving data:', error);
//         res.status(500).json({ message: 'Server error!' });
//     }
// });

// app.use('/styles', express.static(path.join(__dirname, 'styles')));
// app.use('/assets', express.static(path.join(__dirname, 'assets')));

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Сервер працює на http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); 
app.use(cors()); 

mongoose.connect('mongodb://127.0.0.1:27017/formData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB підключено'))
.catch((err) => console.error('Помилка підключення до MongoDB:', err));

// Схема для першої форми
const formDataSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    residence: { type: String, required: true },
    channel: { type: String, required: true },
    followers: { type: String, required: true },
    ageCheck: { type: Boolean, required: true }
});

// Схема для другої форми
const issueFormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    issue: { type: String, required: true }
});

const FormData = mongoose.model('FormData', formDataSchema);
const IssueData = mongoose.model('IssueData', issueFormSchema);

app.get('/', (req, res) => {
    res.send('Сервер працює');
});

// Отримання даних з бази для першої форми
app.get('/formdata', async (req, res) => {
    try {
        const data = await FormData.find(); // Отримуємо всі записи з колекції
        res.status(200).json(data);  // Відправляємо дані у відповідь
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ message: 'Server error while retrieving data' });
    }
});

// Додавання запису для першої форми
app.post('/submit', async (req, res) => {
    console.log('Received form data:', req.body);  
    try {
        const newFormData = new FormData({
            fullName: req.body.fullName,
            email: req.body.email,
            residence: req.body.residence,
            channel: req.body.channel,
            followers: req.body.followers,
            ageCheck: req.body.ageCheck
        });

        await newFormData.save();
        res.status(201).json({ message: 'Data successfully saved!' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Server error!' });
    }
});

// Додавання запису для другої форми ("helpForm")
app.post('/submit-issue', async (req, res) => {
    console.log('Received issue form data:', req.body);
    try {
        const newIssueData = new IssueData({
            name: req.body.name,
            email: req.body.email,
            issue: req.body.issue
        });

        await newIssueData.save();
        res.status(201).json({ message: 'Issue data successfully saved!' });
    } catch (error) {
        console.error('Error saving issue data:', error);
        res.status(500).json({ message: 'Server error while saving issue data!' });
    }
});

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
});