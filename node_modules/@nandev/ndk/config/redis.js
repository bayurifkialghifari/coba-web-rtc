const configs = {
  username: process.env.REDIS_USERNAME || 'default',
  password: process.env.REDIS_PASSWORD || null,
  host: process.env.REDIS_HOST || '127.0.0.1:6379',
};

module.exports = {
  ...configs,
  uri: process.env.REDIS_URI || `redis://${configs.username}${configs.password ? ':' + configs.password : ''}@${configs.host}`
};
