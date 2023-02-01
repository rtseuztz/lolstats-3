import participant from "@/pages/db/participant";
import matchList from "@/pages/riot/match/match-list";
import { MATCH_REGIONS, SUMMONER_REGIONS } from "@/pages/riot/riot/RiotFunctions";
import { summoner, summonerT } from "@/pages/riot/summoner/summoner";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<summonerT | null>
) {
    const { name } = req.query as { name: string }

    // const gameFactory = new matchList(summonerObj.puuid, MATCH_REGIONS.EUROPE)
    //     res.status(200).json({ name: 'John Doe' })
}