import { sign } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next'
import IRiot from '../IRiot';
import { buildQuery, err, riotFetch } from '../RiotFunctions';
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

export class summoner implements IRiot {
    query = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{0}"
    values: string[]
    constructor(values: string[]) {
        this.values = values;
        this.query = buildQuery(this.query, this.values);
    }
    async execute(): Promise<[any, err | null]> {
        const userRes = await riotFetch(this.query)
        const user: any = await userRes.json()
        if (!user || user.status_code)
            return [null, user as err]
        else return [user, null]
    }

}