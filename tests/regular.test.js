import tape from 'tape'
import _test from '../'
const test = _test(tape)

test('ensure that regular test functions still work', (t) => {
  t.true(true)
  t.end()
})
