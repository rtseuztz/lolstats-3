
import participant from "../../db/participant"
import matchList from "../match/match-list"
import match from "../match/matches"
import { summoner } from "../summoner/summoner"
import { MATCH_REGIONS } from "./RiotFunctions"
describe('Backend integration', () => {
    test('getting games', async () => {
        //get summoner
        const s = new summoner(["rtseuztz"], "na1")
        const [user, err1] = await s.execute()
        expect(err1).toBeNull();
        expect(user).toBeTruthy();
        expect(user.name).toBe("rtseuztz")

        //get games list
        const gamelist = new matchList([user.puuid, "1"], MATCH_REGIONS.AMERICA)
        const [list, err2] = await gamelist.execute();
        expect(err2).toBeNull();
        expect(list).toBeTruthy();
        expect(list.length).toBe(1);

        //get game
        const matchFactory = new match([list[0].toString()], MATCH_REGIONS.AMERICA)
        const [participants, err3] = await matchFactory.execute();
        expect(err3).toBeNull();
        expect(participants).toBeTruthy();
        const participantObj = participants![0]
        //upload game
        const postRes = await participant.post(participantObj)

        //get game
        const game = await participant.getByPUUID(participantObj.puuid)
        expect(game).toBeTruthy();
        console.log(game);
    })
})