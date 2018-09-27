import { sum } from '@app/utils';

test('sum', () => {
  expect(sum(2, 2)).toEqual(4);
  expect(sum(1, 1)).toEqual(2);
});
