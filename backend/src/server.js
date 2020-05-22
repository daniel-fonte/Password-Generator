function Server(http, port) {
  const app = http();

  function middleware(use) {
    return app.use(use);
  }

  function start() {
    return app.listen(port);
  }

  return {
    middleware,
    start,
  };
}

export default Server;
