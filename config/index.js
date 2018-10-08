module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 5001
  },
  build: {
    env: require('./prod.env'),
    port: 5002
  }
}