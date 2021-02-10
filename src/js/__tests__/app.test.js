import getState from '../app';


test.each([
  [51, 'Маг', 'healthy'],
  [50, 'Лучник', 'wounded'],
  [30, 'Мечник', 'wounded'],
  [15, 'Монах', 'wounded'],
  [14, 'Российская экономика', 'critical'],
])(
  ('should return right health state'),
  (h, n, expected) => {
    const result = getState({ health: h, name: n });
    expect(result).toBe(expected);
  },
);
