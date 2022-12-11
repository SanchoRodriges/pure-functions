import health from '../app';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Эльф', health: 50 }, 'wounded'],
  [{ name: 'Гном', health: 14 }, 'critical'],
])(
  ('calculate health %s is %s'),
  (obj, status) => {
    const result = health(obj);
    expect(result).toBe(status);
  },
);
