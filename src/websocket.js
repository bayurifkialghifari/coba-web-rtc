const TestHandler = require('./handler/websocket/test');

class WebsocketApp {
  constructor(io) {
    this.io = io
  }

  start() {
    new TestHandler(this.io)
  }
}

module.exports = WebsocketApp;
