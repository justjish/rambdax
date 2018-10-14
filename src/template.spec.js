import { template } from './template'

test('', () => {
  const input = 'foo is {{bar}} even {{a}} more'
  const templateInput = {
    bar : 'BAR',
    a   : 1,
  }

  const result = template(input, templateInput)
  const expectedResult = 'foo is BAR even 1 more'

  expect(
    result
  ).toEqual(expectedResult)
})

test('no interpolation', () => {
  const input = 'foo is bar even more'
  const templateInput = { bar : 'BAR' }

  const result = template(input, templateInput)
  const expectedResult = 'foo is bar even more'

  expect(
    result
  ).toEqual(expectedResult)
})

test('with missing template input', () => {
  const input = 'foo is {{bar}} even {{a}} more'
  const templateInput = {
    baz : 'BAR',
    a   : 1,
  }

  const result = template(input, templateInput)
  const expectedResult = 'foo is {{bar}} even 1 more'

  expect(
    result
  ).toEqual(expectedResult)
})