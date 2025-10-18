// server.js
const express = require('express');
const app = express();
const PORT = 5500;

// publicフォルダ内を公開（例: index.html や style.css）
app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
