function Server(http) {
  const app = http();

  function middleware(use) {
    return app.use(use);
  }

  function routes(route) {
    return app.use(route);
  }
  function start(port) {
    return app.listen(port);
  }

  function stop() {
    return start().close();
  }

  return {
    middleware,
    routes,
    start,
    stop,
  };
}

export default Server;
