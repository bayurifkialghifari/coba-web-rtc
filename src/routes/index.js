const express = require('express');
const router = express.Router();

const ExampleHandler = require('../handler/http/example');

router.get('/', ExampleHandler.handleExample);

module.exports = router;
