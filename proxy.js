// proxy.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const apiUrl = 'https://wise.com/gateway/v3/comparisons';
  const queryParams = new URLSearchParams(req.query).toString();

  try {
    const response = await fetch(`${apiUrl}?${queryParams}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
