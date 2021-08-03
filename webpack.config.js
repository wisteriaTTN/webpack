module.exports = (env) => {
  const config = require(`./config/${env.NODE_ENV}`);
  console.log(config);
  return config;
}