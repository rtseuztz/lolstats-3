import matchesLimiter from "../../limiters/matches";
import Riot from "../riot/IRiot";
import { buildQuery, err } from "../riot/RiotFunctions";

/**
 * Values: [matchID]
 */
export default class match extends Riot {
    query = `https://{REGION}.api.riotgames.com/lol/match/v5/matches/{0}`
    readonly functionAdder = matchesLimiter.addFunction
    constructor(values: string[], region: string) {
        super(values, region)
        this.query = buildQuery(this.query, this.values, this.region);
    }
}