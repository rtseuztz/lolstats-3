import { Participant } from "@/pages/riot/match/matches";
import { SUMMONER_REGIONS } from "@/pages/riot/riot/RiotFunctions";
import { summonerT } from "@/pages/riot/summoner/summoner";
import { NextApiRequest, NextApiResponse } from "next";
import SummonerAPI from "./summoner";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<summonerT | null>
) {
    //query is [region, name]
    const { slug } = req.query as any
    const summonerObj = new SummonerAPI(slug[1], slug[0])
    const summoner = await summonerObj.get();
    res.status(200).json(summoner)
    // const gameFactory = new matchList(summonerObj.puuid, MATCH_REGIONS.EUROPE)
    //     res.status(200).json({ name: 'John Doe' })
}