import server from '../../src/server';

function mock() {
  return 'mock';
}

test('should return object with function start', () => {
  expect(server(mock, 3333)).toHaveProperty('start');
});

test('should return object with function middleware', () => {
  expect(server(mock, 3333)).toHaveProperty('middleware');
});
