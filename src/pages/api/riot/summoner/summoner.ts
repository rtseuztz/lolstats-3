import { sign } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next'
import { buildQuery, err, riotFetch } from '../riot/RiotFunctions';
import summonerLimiter from '../../limiters/summoner';
import Riot from '../riot/IRiot';
const key: string = process.env.API_KEY || "";
type Data = {
    name: string
}
type summonerT = {
    accountId: string,
    id: string,
    name: string,
    profileIconId: number,
    puuid: string,
    revisionDate: number,
    summonerLevel: number,
}
type reqData = {
    name: string
}
/**
 * values: [summonerName]
 */
export class summoner extends Riot {
    query = "https://{REGION}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{0}"
    readonly promiseRateLimiter = summonerLimiter
    constructor(values: string[], region: string) {
        super(values, region)
        this.query = buildQuery(this.query, this.values, this.region);
    }
    async execute(): Promise<[summonerT, err | null]> {
        var [res, err] = await super.execute()
        if (err) {
            return [{
                accountId: "",
                id: "",
                name: "",
                profileIconId: 0,
                puuid: "",
                revisionDate: 0,
                summonerLevel: 0
            }, err]
        } else {
            return [res as summonerT, err]
        }
    }
}






export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<summonerT>
) {
    console.log(key);
    const { name } = req.query
    if (!name) {
        res.status(404);
        return;
    }
    console.log(req.body)
    //check db first, else pull from stuff
    const queryString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name + "?api_key=" + key;
    const userRes = await fetch(queryString)
    const user: summonerT = await userRes.json()
    res.status(200).json(user)

}
