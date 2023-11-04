module.exports = {
  useS3: process.env.USE_S3 === 'true' || false,
  temporary: {},
  s3: {
    endPoint: process.env.S3_ENDPOINT || 'http://localhost:9000',
    useSSL: process.env.S3_USE_SSL === 'true' || false,
    port: process.env.S3_PORT || (process.env.S3_USE_SSL === 'true' ? 443 : 80),
    accessKey: process.env.S3_ACCESS_KEY || 'nande',
    secretKey: process.env.S3_SECRET_KEY || 'secret',
    bucket: process.env.S3_BUCKET_NAME || 'main'
  }
};
