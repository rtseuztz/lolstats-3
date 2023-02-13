import exp from "constants"
import _ from "underscore"
import { Participant } from "../../riot/match/matches"
import { MATCH_REGIONS, SUMMONER_REGIONS } from "../../riot/riot/RiotFunctions"
import ParticipantAPI from "./participant"
describe('summoner api', () => {
    test('get to have values and to be in order', async () => {
        const participationFactory = new ParticipantAPI("J2B4drP4xCTa9DmJkIG_y2i_ht59W4tUmOmUBBg20GKczRSwWuPke_2ReIbEkUsED5_oKf1EE8JhXg", SUMMONER_REGIONS["North America"])
        const games = await participationFactory.get()
        expect(games).toBeTruthy()
        const firstKey = Object.keys(games!)[0]
        expect(games![firstKey][0].startTime).toBe(games![firstKey][1].startTime)
        //expect(Number(participants![0].startTime)).toBeGreaterThan(Number(participants![1].startTime))
    })


})