import match, { Game, Participant } from "../../riot/match/matches";
import participant from "../../db/participant";
import { convertSummonerRegion, err, MATCH_REGIONS, SUMMONER_REGIONS } from "../../riot/riot/RiotFunctions";
import { summoner, summoner as summonerFactory, summonerT } from "../../riot/summoner/summoner";
import matchList from "../../riot/match/match-list";
import * as _ from 'underscore'
import { Dictionary } from "underscore";
export default class ParticipantAPI {
    readonly puuid: string
    readonly region: string
    constructor(puuid: string, region: string) {
        this.puuid = puuid
        this.region = convertSummonerRegion(region)
    }
    async get(): Promise<_.Dictionary<Participant[]> | null> {
        // const factory = new summonerFactory([this.name], this.region)
        // const [summonerObj, error] = await factory.execute()
        // if (error) {
        //     return null
        // }
        //db first then riot
        var participantsList = await participant.getByPUUID(this.puuid)
        participantsList.sort((p1, p2) => {
            return Number(p2.startTime) - Number(p1.startTime)
        })

        //riot
        const matchListFactory = new matchList([this.puuid, "100"], this.region)
        const [gameList, err2] = await matchListFactory.execute();

        //get games from each gameID in gamelist.
        let factories: any[] = []
        gameList.forEach((gameID) => {
            factories.push(new match([gameID.toString()], this.region))
        })
        let promises: any[] = []
        factories.forEach((factory) => {
            promises.push(factory.execute())
        })
        const participantsPromiseResult: [Participant[], err][] = await Promise.all(promises)
        participantsPromiseResult.forEach(([participants, err]: [Participant[], err]) => {
            if (participants) {
                participantsList = participantsList.concat(participants)
            }
        })
        participantsList = uniqWith(participantsList, (a: Participant, b: Participant) => a.puuid == b.puuid && a.gameID == b.gameID)

        // const [participants, err3] = await matchListFactory.execute();

        //participantsList = _.uniq(participantsList, 'gameID')
        let games: Dictionary<Participant[]>
        games = _.groupBy(participantsList, (p: Participant) => p.gameID)
        games = Object.keys(games).sort().reduce(
            (obj: any, key) => {
                obj[key] = games[key];
                return obj;
            },
            {}
        );
        return games
    }
    /**
     * 
     * @param region - the summoner regions object
     */

}
function uniqWith(arr: any[], fn: any): any { arr.filter((element, index) => arr.findIndex((step) => fn(element, step)) === index) }