const proxy = [
  {
    context: '/api',
    target: 'http://gateway:85',
    // target: '/api',
    // target: 'http://localhost:8080',
    // pathRewrite: {'^/api' : '/api'}
  }
];

module.exports = proxy;
