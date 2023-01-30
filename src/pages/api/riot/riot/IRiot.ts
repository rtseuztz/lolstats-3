import limiter from "@/pages/api/limiters/rate-limiter";
import { buildQuery, err, riotFetch } from "./RiotFunctions";
import RateLimiter from "@/pages/api/limiters/rate-limiter";
import summonerLimiter from "../../limiters/summoner";
export default abstract class Riot {
    /**
     * This should have missing values as {0}, {1}, ...
     */
    query: string = ""
    protected readonly values: string[]
    protected readonly region: string
    protected readonly functionAdder: Function = summonerLimiter.addFunction
    constructor(values: string[], region: string) {
        this.values = values;
        this.region = region
    }
    /**
     * 
     * @returns The JSON of the object with a null error, or a null JSON with an error object.
     */
    async execute(): Promise<[{}, err | null]> {
        const userRes = await this.functionAdder(riotFetch(this.query))
        const res: any = await userRes.json()
        if (!res || res.status_code)
            return [{}, res as err]
        else return [res, null]
    }
}
