import express from 'express';
import cors from 'cors';
// import identifyRoute from './routes/identify';

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/identify', identifyRoute);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});