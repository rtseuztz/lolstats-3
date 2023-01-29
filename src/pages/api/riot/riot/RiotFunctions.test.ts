
import { riotFetch, buildQuery } from "./RiotFunctions";

describe('Generic riot functions', () => {
    test('build query', () => {
        const str = buildQuery("{0}", ["hello"])
        expect(str).toBe("hello")
    })
})