import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
    credentials: true, 
    origin: ["http://localhost:4200"]
}));

app.get('/api/hello' , (req, res) => {
    res.send('Hello World!');
});


const port = 5000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});