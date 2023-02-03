import { Participant } from "../../riot/match/matches"
import { MATCH_REGIONS, SUMMONER_REGIONS } from "../../riot/riot/RiotFunctions"
import summoner from "./summoner"
describe('summoner api', () => {
    test('get', async () => {
        const participationFactory = new summoner("rtseuztz", SUMMONER_REGIONS["North America"])
        const participants = await participationFactory.get()
        expect(participants).toBeTruthy()
        expect(Number(participants![0].startTime)).toBeGreaterThan(Number(participants![1].startTime))
    })

})