import express from 'express';
import cors from 'cors';
import identifyRoutes from './services/identify/routes';

const app = express();
app.use(cors());
app.use(express.json());

// Creats a path for the identify service
app.use('/identify', identifyRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});