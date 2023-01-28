
import { hello } from "./hello";

describe('hello module', () => {
    test('returns hello', () => {
        expect(hello()).toBe("hello")
    })
})