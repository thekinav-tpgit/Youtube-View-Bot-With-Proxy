const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // Trigger bot on ANY request
  require('../index.js');
  
  res.status(200).json({ 
    status: 'Bot triggered!', 
    video: 'https://youtube.com/shorts/GGF617c-N0A' 
  });
};
