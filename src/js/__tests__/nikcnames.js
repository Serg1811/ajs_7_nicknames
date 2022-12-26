import Validator from '../nicknames';

test.each([
  ['Сергей', false],
  ['Serg', true],
  ['我的天使', false],
  ['serg-serg', true],
  ['serg_serg', true],
  ['serg123rfth12fcg', true],
  ['serg1234fgx123gygj', false],
  ['1serg', false],
  ['serg1', false],
  ['_serg', false],
  ['serg_', false],
  ['-serg', false],
  ['serg-', false],
  ['serg$', false],
  ['S', true],
])('regexp', (obj, expected) => {
  const result = new Validator(obj).validateUsername();
  expect(result).toBe(expected);
});
