import { summonerT } from "@/pages/riot/summoner/summoner";
import { summoner as summonerFactory } from "../../riot/summoner/summoner";

export default class ParticipantAPI {
    readonly name: string
    readonly region: string
    constructor(name: string, region: string) {
        this.name = name;
        this.region = region;
    }
    async get(): Promise<summonerT | null> {
        const factory = new summonerFactory([this.name], this.region)
        const [summonerObj, error] = await factory.execute()
        if (error) {
            return null
        }
        return summonerObj
    }
}