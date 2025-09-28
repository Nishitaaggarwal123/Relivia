require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/relivia';
mongoose.connect(MONGODB_URI).then(()=>console.log('MongoDB connected')).catch(console.error);

const RequestSchema = new mongoose.Schema({
  name: String,
  location: String,
  need: String,
  contact: String,
  createdAt: { type: Date, default: Date.now }
});
const Request = mongoose.model('Request', RequestSchema);

// submit help
app.post('/help', async (req, res) => {
  const r = new Request(req.body);
  await r.save();
  res.json({ ok: true, id: r._id });
});

// list requests
app.get('/requests', async (req, res) => {
  const list = await Request.find().sort({ createdAt: -1 }).limit(200);
  res.json(list);
});

// simple health
app.get('/', (req,res)=>res.send('Relivia backend running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server ${PORT}`));
