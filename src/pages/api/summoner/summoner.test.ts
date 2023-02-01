import { Participant } from "../../riot/match/matches"
import { MATCH_REGIONS, SUMMONER_REGIONS } from "../../riot/riot/RiotFunctions"
import summoner from "./summoner"
describe('summoner api', () => {
    test('get', async () => {
        const participationFactory = new summoner("rtseuztz", SUMMONER_REGIONS.NA1)
        const [participants, err] = await participationFactory.get()
        expect(participants).toBeTruthy()
        expect(err).toBe(null)
        expect(Number(participants![0].startTime)).toBeGreaterThan(Number(participants![1].startTime))
    })
})