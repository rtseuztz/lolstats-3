
import { summoner } from "./summoner";

describe('Riot Summoner ', () => {
    test('Creating summoner', () => {
        const s = new summoner(["rtseuztz"])
        expect(s.query).toBe("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/rtseuztz")
    })
    test('Getting correct result', async () => {
        const s = new summoner(["rtseuztz"])
        const user = await s.execute()
        expect(user[1]).toBeNull
        expect(user[0]).toBeTruthy();
        expect(user[0].name).toBe("rtseuztz")
    })
    test('Erroneous result', async () => {
        const s = new summoner(["$$$"])
        const user = await s.execute()
        expect(user[1]).toBeTruthy
        expect(user[0]).toBeNull
    })
})