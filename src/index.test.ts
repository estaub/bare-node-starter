import { testeeDoubler } from './index'

test('jest hello world', () => {
    const doubled = testeeDoubler(1)
    expect(doubled).toEqual(2)
})
