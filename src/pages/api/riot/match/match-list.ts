import matchListLimiter from "../../limiters/match-list";
import Riot from "../riot/IRiot";
import { buildQuery, err } from "../riot/RiotFunctions";

/**
 * Values: [puuid, # of matches]
 */
export default class match extends Riot {
    query = `https://{REGION}.api.riotgames.com/lol/match/v5/matches/by-puuid/{0}/ids?start=0&count={1}`
    readonly functionAdder = matchListLimiter.addFunction;
    constructor(values: string[], region: string) {
        super(values, region)
        this.query = buildQuery(this.query, this.values, this.region);
    }
}