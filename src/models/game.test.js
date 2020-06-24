import Game from './game';

test('game', () => {
  const sut = new Game(5);
  expect(sut.board.length).toBe(5);
});
