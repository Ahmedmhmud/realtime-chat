import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/realtime-chat');

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    render('index');
});


app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
