module.exports = {
  uri: process.env.DB_URI || 'postgres://root:mastangimas@127.0.0.1',
  options: {
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    logging: (msg) => {
      if(process.env.DB_LOG === 'true') console.log(msg);
    },
    timezone: process.env.TZ || 'Asia/Jakarta',
  }
};
