
import { summoner } from "./summoner";

describe('Riot Summoner ', () => {
    test('Creating summoner', () => {
        const s = new summoner(["rtseuztz"], "na1")
        expect(s.query).toBe("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/rtseuztz")
    })
    test('Getting correct result', async () => {
        const s = new summoner(["rtseuztz"], "na1")
        const user = await s.execute()
        expect(user[1]).toBeNull
        expect(user[0]).toBeTruthy();
        expect(user[0].name).toBe("rtseuztz")
    })
    test('different region', async () => {
        const s = new summoner(["thebausffs"], "euw1")
        const user = await s.execute()
        expect(user[1]).toBeNull
        expect(user[0]).toBeTruthy();
        expect((user[0].name as string).toLocaleLowerCase()).toBe("thebausffs")
    })
    test('Erroneous result', async () => {
        const s = new summoner(["$$$"], "na1")
        const user = await s.execute()
        expect(user[1]).toBeTruthy
        expect(user[0]).toBeNull
    })
})