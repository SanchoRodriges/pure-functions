import health from '../app';

test('calculate health', () => {
  const wizard = health({ name: 'Маг', health: 90 });
  const elf = health({ name: 'Эльф', health: 50 });
  const dwarf = health({ name: 'Гном', health: 14 });

  expect(wizard).toBe('healthy');
  expect(elf).toBe('wounded');
  expect(dwarf).toBe('critical');
});
