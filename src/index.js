const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const posts = new Map();
let nextId = 1;

app.get('/api/posts', (req, res) => {
    const all = Array.from(posts.values());
    res.json({ posts: all, total: all.length });
});

app.post('/api/posts', (req, res) => {
    const { title, content, platform, scheduledAt } = req.body;
    if (!title || !content) {
          return res.status(40
