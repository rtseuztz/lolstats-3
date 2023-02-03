import { Participant } from "../../riot/match/matches";
import participant from "../../db/participant";
import { err, SUMMONER_REGIONS } from "../../riot/riot/RiotFunctions";
import { summoner as summonerFactory } from "../../riot/summoner/summoner";

export default class SummonerAPI {
    readonly name: string
    readonly region: string
    constructor(name: string, region: string) {
        this.name = name;
        this.region = region;
    }
    async get(): Promise<Participant[] | null> {
        const factory = new summonerFactory([this.name], this.region)
        const [summonerObj, error] = await factory.execute()
        if (error) {
            return null
        }
        //db first then riot
        console.log(summonerObj)
        var pariticipations = await participant.getByPUUID(summonerObj.puuid)

        pariticipations.sort((p1, p2) => {
            return Number(p2.startTime) - Number(p1.startTime)
        })
        return pariticipations
    }
}