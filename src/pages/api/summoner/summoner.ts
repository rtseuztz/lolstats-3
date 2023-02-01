import { Participant } from "../../riot/match/matches";
import participant from "../../db/participant";
import { err, SUMMONER_REGIONS } from "../../riot/riot/RiotFunctions";
import { summoner as summonerFactory } from "../../riot/summoner/summoner";

export default class summoner {
    readonly name: string
    readonly region: string
    constructor(name: string, region: string) {
        this.name = name;
        this.region = region;
    }
    async get(): Promise<[Participant[] | null, err | null]> {
        const factory = new summonerFactory([this.name], this.region)
        const [summonerObj, error] = await factory.execute()
        if (error) {
            return [null, error]
        }
        //db first then riot
        var pariticipations = await participant.getByPUUID(summonerObj.puuid)
        // console.log(pariticipations)
        pariticipations.sort((p1, p2) => {
            return Number(p2.startTime) - Number(p1.startTime)
        })
        return [pariticipations, error]
    }
}