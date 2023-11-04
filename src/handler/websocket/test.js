class TestHandler {
  static Namespace = '/zoom'

  constructor(io) {
    io.of(TestHandler.Namespace)
      .on('connection', client => {
        this.start(io, client)
      })
  }

  start(io, client) {
    client.on('join-room', (roomId, userId) => {
      // Join the room
      client.join(roomId)
      client.to(roomId).emit('user-connected', userId)
    })
  }
}

module.exports = TestHandler
