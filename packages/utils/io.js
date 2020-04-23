import io from 'socket.io-client';

class Server {
  constructor(href) {
    this.socket = io.connect(href);
    this.subscriptions();
  }

  subscriptions() {
    this.socket.on('connect', () => {
      console.log('socket connected');
    });
    this.socket.on('disconnect', () => {
      console.log('socket disconnected');
      this.socket.connect();
    });
  }
}

export default Server;
