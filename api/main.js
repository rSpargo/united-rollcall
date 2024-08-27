import express from 'express';
import cors from 'cors';
import records from './routes/record.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/record', records);

// starts the express server
app.listen(PORT, () => {
  console.log(`Backend currently listening on port ${PORT}`);
});
