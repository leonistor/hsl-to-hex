const hsl = require('../')
const test = require('tap').test

test('pure white', (assert) => {
  const expected = '#ffffff'
  let actual = hsl(0, 100, 100)
  const it = 'max saturation and luminosity should return pure white'
  assert.is(actual, expected, it)
  assert.end()
})
