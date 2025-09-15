const express = require('express');
const analysisRoutes = require('./src/routes/analysis');
const app = express();

app.use(express.json());
app.use('/api', analysisRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
